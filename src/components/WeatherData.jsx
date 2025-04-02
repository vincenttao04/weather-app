import React from "react";
import "../styles/weather-data.css";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import WaterRoundedIcon from "@mui/icons-material/WaterRounded";

const WeatherData = ({ weatherData }) => {
  return (
    <>
      <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
      <p className="temperature">{weatherData.temperature}°C</p>
      <p className="date">{weatherData.date}</p>
      <div className="weather-data">
        <div className="col">
          <WaterRoundedIcon fontSize="large" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <AirRoundedIcon fontSize="large" />
          <div>
            <p>{weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherData;
