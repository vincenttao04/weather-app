import React, { useEffect } from "react";
import "../styles/one-day-data.css";
import WindSpeedIcon from "@mui/icons-material/AirRounded";
import HumidityIcon from "@mui/icons-material/WaterRounded";
import { useTheme } from "@mui/material";

const OneDayWeather = ({ weatherData }) => {
  const theme = useTheme();

  return (
    <>
      <div className="top-wrapper">
        <div className="icon-col">
          <img
            src={weatherData.icon}
            alt="One Day Weather Icon"
            className="one-day-weather-icon"
          />
        </div>

        <div className="main-temp-col">
          <p className="one-day-temp">{weatherData.temperature}°C</p>
          <p className="feels-like">
            Feels Like: {weatherData.feelsLikeTemp}°C
          </p>
        </div>

        <div className="min-max-col">
          <p>Min: {weatherData.minTemperature}°C</p>
          <p>Max: {weatherData.maxTemperature}°C</p>
        </div>
      </div>

      <p className="one-day-date">{weatherData.date}</p>

      <p>{weatherData.humidity} %</p>
      <p>{weatherData.windSpeed} km/h</p>
      <p>{weatherData.cloudCoverage} %</p>
      <p>{weatherData.visibility} km</p>
    </>
  );
};

//   <div className="icon-col">
//     <img
//       src={weatherData.icon}
//       alt="One Day Weather Icon"
//       className="one-day-weather-icon"
//     />
//   </div>
//   <div className="temp-col">
//     <div className="temp-wrapper">
//       <div className="main-temp">
//         <p className="one-day-temp">{weatherData.temperature}°C</p>
//         <p>Feels Like:{weatherData.feelsLikeTemp}°C</p>
//       </div>

//       <div className="other-temp">
//         <p>Min:{weatherData.minTemperature}°C</p>
//         <p>Max:{weatherData.maxTemperature}°C</p>
//       </div>
//     </div>
//   </div>
// </div>

export default OneDayWeather;
