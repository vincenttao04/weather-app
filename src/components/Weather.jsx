import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import humidity_icon from "../assets/humidity.png";
import search_icon from "../assets/search.png";
import { weatherIcons } from "../config/icons.js";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const search = async (city) => {
    // Checks OpenWeather API key validity
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;

      const response = await fetch(url);
      const data = await response.json();

      // Checks city validity
      if (!response.ok) {
        alert("Error. See console for more details");
        console.log(data.message);
        return;
      }

      console.log(data);

      const icon = weatherIcons[data.weather[0].icon] || weatherIcons["01d"];

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.round(data.main.temp),
        location: data.name,
        icon: icon,
      });

      // Reset input field to empty string after a successful search
      setInputValue("");
    } catch {
      setWeatherData(false);
      console.error("Error in fetching weather data");
    }
  };

  // Initial city search when loading weather app.
  useEffect(() => {
    search("Auckland");
  }, []);

  if (!weatherData)
    return (
      <div className="error-display">
        <p>Error. See console for more details</p>
      </div>
    );

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <img
          src={search_icon}
          alt=""
          onClick={() => {
            if (inputValue) search(inputValue);
          }}
          className={inputValue === "" ? "disabled" : ""}
        />
      </div>
      <img src={weatherData.icon} alt="" className="weather-icon" />
      <p className="temperature">{weatherData.temperature}°C</p>
      <p className="location">{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>{weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
