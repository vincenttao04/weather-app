import React, { useState } from "react";
import search_icon from "../assets/icons/search.png";
import mic_icon from "../assets/icons/mic.svg";
import "../styles/search-bar.css";

function SearchBar({ inputValue, setInputValue, search }) {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }

    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      search(transcript);
    };
    recognition.onerror = (event) =>
      console.error("Speech Recognition Error:", event.error);
    recognition.onend = () => setIsListening(false);

    recognition.start();
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
        placeholder="Search"
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
        onClick={startListening}
        className={`mic-icon ${isListening ? "active" : ""}`}
      />
    </div>
  );
}

export default SearchBar;
