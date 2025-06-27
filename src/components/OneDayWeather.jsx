// React import
import { useEffect } from "react";

// External library imports
import { useTheme } from "@mui/material";
import FilterDramaRoundedIcon from "@mui/icons-material/FilterDramaRounded";
import HumidityIcon from "@mui/icons-material/WaterRounded";
import WindSpeedIcon from "@mui/icons-material/AirRounded";

// CSS imports
import "../styles/one-day-data.css";

const OneDayWeather = ({ weatherData }) => {
  const theme = useTheme();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--text-secondary",
      theme.palette.text.secondary
    );
  }, [theme]);

  return (
    <div className="parent-wrapper">
      <div className="top-wrapper">
        <div className="icon-col">
          <img
            src={weatherData.icon}
            alt="One Day Weather Icon"
            className="one-day-weather-icon"
          />
          <p className="one-day-weather-des">{weatherData.description}</p>
        </div>

        <div className="temp-col">
          <div className="temp-center">
            <p className="one-day-temp">{weatherData.temperature}°C</p>
          </div>
          <p className="feels-like">
            Feels Like: {weatherData.feelsLikeTemp}°C
          </p>
        </div>
      </div>

      <p className="one-day-date">{weatherData.date}</p>

      <div className="bottom-wrapper">
        <div className="col">
          <FilterDramaRoundedIcon
            fontSize="large"
            sx={{ color: theme.palette.text.secondary }}
          />
          <div className="labels">
            <p>{weatherData.cloudCoverage} %</p>
            <p>Cloudage</p>
          </div>
        </div>

        <div className="col">
          <HumidityIcon
            fontSize="large"
            sx={{ color: theme.palette.text.secondary }}
          />
          <div className="labels">
            <p>{weatherData.humidity} %</p>
            <p>Humidity</p>
          </div>
        </div>

        <div className="col">
          <WindSpeedIcon
            fontSize="large"
            sx={{ color: theme.palette.text.secondary }}
          />
          <div className="labels">
            <p>{weatherData.windSpeed} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneDayWeather;
