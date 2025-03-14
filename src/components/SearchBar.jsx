import React from "react";
import search_icon from "../assets/search.png";
import "../styles/search-bar.css";

function SearchBar({ inputValue, setInputValue, search }) {
  return (
    <div className="search-bar">
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
        src={search_icon}
        alt="Search Icon"
        onClick={() => {
          if (inputValue) search(inputValue);
        }}
        className={inputValue === "" ? "disabled" : ""}
      />
    </div>
  );
}

export default SearchBar;
