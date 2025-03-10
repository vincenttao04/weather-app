import React, { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherApiService.js";
import "../styles/weather.css";
import weatherIcons from "../utils/weatherIcons.js";
import WeatherData from "./WeatherData.jsx";
import SearchBar from "./SearchBar.jsx";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const search = async (city) => {
    // calls openweather api
    const data = await fetchWeather(city);

    if (data !== null) {
      console.log(data);
      const icon = weatherIcons[data?.weather[0]?.icon] || weatherIcons["01d"];
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
      <div className="weather-wrapper">
        <div className="weather">
          {weatherData ? <WeatherData weatherData={weatherData} /> : <></>}
        </div>
        <div className="weather">
          {weatherData ? <WeatherData weatherData={weatherData} /> : <></>}
        </div>
        <div className="weather">
          {weatherData ? <WeatherData weatherData={weatherData} /> : <></>}
        </div>
      </div>
      <div className="location">
        {weatherData ? <p>{weatherData.location}</p> : <></>}
      </div>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        search={search}
      />
    </div>
  );
};

export default Weather;
