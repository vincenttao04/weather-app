import React, { useState } from "react";
import "../styles/search-bar.css";
import InputAdornment from "@mui/material/InputAdornment";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material";

function SearchBar({ inputValue, setInputValue, search }) {
  const theme = useTheme();

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
                cursor: inputValue === "" ? "not-allowed" : "pointer",
                "&:hover": {},
              }}
            />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <MicRoundedIcon
              onClick={toggleListening}
              sx={{
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
        width: "230px",
        backgroundColor: theme.palette.background.textfield,
        borderRadius: "28px",
        fieldset: { border: "none" },
        "& .MuiOutlinedInput-root": {
          borderRadius: "28px",
        },
      }}
    />
  );
}

export default SearchBar;
