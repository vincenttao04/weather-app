// React import
import { useEffect } from "react";

// External library imports
import { useTheme } from "@mui/material";
import HumidityIcon from "@mui/icons-material/WaterRounded";
import WindSpeedIcon from "@mui/icons-material/AirRounded";

// CSS imports
import "../styles/three-day-data.css";

const ThreeDayWeather = ({ weatherData }) => {
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
      <div className="three-day-data">
        <div className="col">
          <HumidityIcon
            fontSize="large"
            sx={{ color: theme.palette.text.secondary }}
          />
          <div className="labels">
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <WindSpeedIcon
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

export default ThreeDayWeather;
