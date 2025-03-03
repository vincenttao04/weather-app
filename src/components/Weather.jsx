import React from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p className="temperature">16°C</p>
      <p className="location">Auckland</p>
    </div>
  );
};

export default Weather;
