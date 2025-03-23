import React, { useState } from "react";
import search_icon from "../assets/icons/search.png";
import mic_icon from "../assets/icons/mic.svg";
import "../styles/search-bar.css";

function SearchBar({ inputValue, setInputValue, search }) {
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
    <div className="search-bar">
      <img
        src={search_icon}
        alt="Search Icon"
        onClick={() => {
          if (inputValue) search(inputValue);
        }}
        className={`search-icon ${inputValue === "" ? "disabled" : ""}`}
      />
      <input
        type="text"
        placeholder={isListening ? "Listening..." : "Search"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && inputValue.trim() !== "") {
            search(inputValue);
          }
        }}
      />
      <img
        src={mic_icon}
        alt="Microphone Icon"
        onClick={toggleListening}
        className={`mic-icon ${isListening ? "active" : ""}`}
      />
    </div>
  );
}

export default SearchBar;
