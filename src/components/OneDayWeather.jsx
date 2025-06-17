import React, { useEffect } from "react";
// import "../styles/one-day-data.css";
import WindSpeedIcon from "@mui/icons-material/AirRounded";
import HumidityIcon from "@mui/icons-material/WaterRounded";
import { useTheme } from "@mui/material";

const OneDayWeather = ({ weatherData }) => {
  const theme = useTheme();

  return (
    <>
      <img src={weatherData.icon} alt="One Day Weather Icon" />
      <p>{weatherData.temperature}°C</p>
      <p>Min:{weatherData.minTemperature}°C</p>
      <p>Max:{weatherData.maxTemperature}°C</p>
      <p>Feels Like:{weatherData.feelsLikeTemp}°C</p>
      <p>{weatherData.date}</p>
      <p>{weatherData.humidity} %</p>
      <p>{weatherData.windSpeed} km/h</p>
      <p>{weatherData.cloudCoverage} %</p>
      <p>{weatherData.visibility} km</p>
    </>
  );
};

export default OneDayWeather;
