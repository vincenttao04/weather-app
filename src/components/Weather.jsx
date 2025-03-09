import React, { useEffect, useRef, useState } from "react";
import { fetchWeather } from "../services/weatherApiService.js";
import "../styles/Weather.css";
import search_icon2 from "../assets/search2.png";
import weatherIcons from "../utils/weatherIcons.js";
import WeatherData from "./WeatherData.jsx";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const search = async (city) => {
    // calls openweather api
    const data = await fetchWeather(city);

    if (data !== null) {
      console.log(data);
      const icon = weatherIcons[data.weather[0].icon] || weatherIcons["01d"];
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.round(data.main.temp),
        location: data.name,
        icon: icon,
      });
    }

    // Reset input field to empty string after a successful search
    setInputValue("");
  };

  // Initial city search when loading weather app.
  useEffect(() => {
    search("Auckland");
  }, []);

  return (
    <div className="root-container">
      <div className="weather">
        {weatherData ? <WeatherData weatherData={weatherData} /> : <></>}
      </div>
      <div className="search-bar">
        <input
          ref={inputRef}
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
          src={search_icon2}
          alt=""
          onClick={() => {
            if (inputValue) search(inputValue);
          }}
          className={inputValue === "" ? "disabled" : ""}
        />
      </div>
    </div>
  );
};

export default Weather;
