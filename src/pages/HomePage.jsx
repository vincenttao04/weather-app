import React, { useEffect, useState } from "react";
import Weather from "../components/Weather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { fetchWeather } from "../services/weatherApiService.js";
import "../styles/weather.css";
import weatherIcons from "../utils/weatherIcons.js";
import Error from "../components/Error.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import WeatherData from "../components/WeatherData.jsx";
import moment from "moment";
import Paper from "@mui/material/Paper";
import ThreeDayIcon from "@mui/icons-material/ViewWeekRounded";
import OneDayIcon from "@mui/icons-material/WebAssetRounded";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [weatherData, setWeatherData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#282828",
        textfield: "#282828",
      },
      text: {
        primary: "#ffffff",
        secondary: "#b0b692",
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#ffffff",
        paper: "#f0f0f0",
        textfield: "#f0f0f0",
      },
      text: {
        primary: "#000000",
        secondary: "#448289",
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
    },
  });

  const handleThemeChange = (event) => {
    setIsDarkMode(event.target.checked);
  };

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
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="root-container">
        <Error message={error} onClose={() => setError("")} />
        <ThreeDayIcon sx={{ cursor: "pointer" }} />
        <OneDayIcon sx={{ cursor: "pointer" }} />
        <div className="weather-wrapper">
          {weatherData.map((data, index) => (
            <Paper className="weather" key={index} elevation={0}>
              <WeatherData weatherData={data} />
            </Paper>
          ))}
        </div>
        {weatherData.length > 0 && (
          <div className="location">{weatherData[0].location}</div>
        )}
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          search={search}
        />
        <ThemeToggle checked={isDarkMode} onChange={handleThemeChange} />
      </div>
    </ThemeProvider>
  );
};

export default App;
