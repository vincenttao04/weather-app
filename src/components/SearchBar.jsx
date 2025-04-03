import React, { useState } from "react";
import "../styles/search-bar.css";
import InputAdornment from "@mui/material/InputAdornment";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TextField from "@mui/material/TextField";

function SearchBar({ inputValue, setInputValue, search }) {
  // Voice input search code:
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
      return;
    }

    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }

    const newRecognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();

    newRecognition.lang = "en-US";
    newRecognition.interimResults = true;
    newRecognition.continuous = true;

    newRecognition.onstart = () => {
      setIsListening(true);
      setInputValue("");
    };

    newRecognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setInputValue(transcript);
    };

    newRecognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setIsListening(false);
    };

    newRecognition.onend = () => {
      setIsListening(false);
    };

    newRecognition.start();
    setRecognition(newRecognition);
  };

  return (
    <TextField
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={isListening ? "Listening..." : "Search"}
      onKeyDown={(e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
          search(inputValue);
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRoundedIcon
              onClick={() => {
                if (inputValue) search(inputValue);
              }}
              sx={{
                opacity: inputValue === "" ? 0.6 : 1,
                cursor: inputValue === "" ? "not-allowed" : "pointer",
                "&:hover": {
                  opacity: inputValue === "" ? 0.6 : 1,
                },
              }}
            />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <MicRoundedIcon
              onClick={toggleListening}
              sx={{
                opacity: isListening ? 1 : 0.6,
                cursor: "pointer",
                "&:hover": { opacity: 1 },
                filter: isListening
                  ? "drop-shadow(0px 0px 3px #ef4444)"
                  : "none",
              }}
            />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "220px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "25px",
          height: "50px",
          "& fieldset": { borderColor: "transparent" },
          "&:hover fieldset": { borderColor: "transparent" },
          "&.Mui-focused fieldset": { borderColor: "transparent" },
        },
      }}
    />
  );
}

export default SearchBar;
