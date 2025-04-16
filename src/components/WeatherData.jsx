import React, { useEffect } from "react";
import "../styles/weather-data.css";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import WaterRoundedIcon from "@mui/icons-material/WaterRounded";
import { useTheme } from "@mui/material";

const WeatherData = ({ weatherData }) => {
  const theme = useTheme();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--text-secondary",
      theme.palette.text.secondary
    );
  }, [theme]);

  return (
    <>
      <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
      <p className="temperature">{weatherData.temperature}°C</p>
      <p className="date">{weatherData.date}</p>
      <div className="weather-data">
        <div className="col">
          <WaterRoundedIcon
            fontSize="large"
            sx={{ color: theme.palette.text.secondary }}
          />
          <div className="labels">
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <AirRoundedIcon
            fontSize="large"
            sx={{ color: theme.palette.text.secondary }}
          />
          <div className="labels">
            <p>{weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherData;
