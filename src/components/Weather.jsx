import React, { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherApiService.js";
import "../styles/weather.css";
import weatherIcons from "../utils/weatherIcons.js";
import Error from "./Error.jsx";
import SearchBar from "./SearchBar.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import WeatherData from "./WeatherData.jsx";
import moment from "moment";
import Paper from "@mui/material/Paper";

const Weather = ({ isDarkMode, handleThemeChange }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const search = async (city) => {
    const { data, error } = await fetchWeather(city); // Call Openweather API

    if (!data) {
      setError(error);
      return;
    }

    const forecastIndexes = [0, 8, 16]; // Current day, tomorrow, 2 days from now
    const formattedData = forecastIndexes.map((index) => ({
      humidity: data.list[index]?.main.humidity,
      windSpeed: data.list[index]?.wind.speed,
      temperature: Math.round(data.list[index]?.main.temp),
      location: data.city.name,
      icon:
        weatherIcons[data.list[index]?.weather[0]?.icon] || weatherIcons["01d"],
      date: moment.unix(data.list[index]?.dt).format("dddd D MMMM"),
    }));

    setWeatherData(formattedData);
    setInputValue("");
    setError("");
  };

  // First city search
  useEffect(() => {
    search("Auckland");
  }, []);

  return (
    <div className="root-container">
      <Error message={error} onClose={() => setError("")} />
      <div className="weather-wrapper">
        {weatherData.map((data, index) => (
          <Paper className="weather" key={index} elevation={0}>
            <WeatherData weatherData={data} />
          </Paper>
        ))}
      </div>
      {weatherData.length > 0 && (
        <div className="location">
          <p>{weatherData[0].location}</p>
        </div>
      )}
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        search={search}
      />
      <ThemeToggle checked={isDarkMode} onChange={handleThemeChange} />
      <div>{isDarkMode ? "dark" : "light"}</div>
    </div>
  );
};

export default Weather;
