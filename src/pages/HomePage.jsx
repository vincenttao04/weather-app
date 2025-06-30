// React import
import { useEffect, useState } from "react";

// External library imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import moment from "moment";
import Paper from "@mui/material/Paper";

// Service/API imports
import { fetchWeather } from "../services/weatherApiService.js";

// Utility imports
import { darkTheme, lightTheme } from "../utils/theme";
import weatherIcons from "../utils/weatherIcons.js";

// Component imports
import Error from "../components/Error.jsx";
import OneDayWeather from "../components/OneDayWeather.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import ThreeDayWeather from "../components/ThreeDayWeather.jsx";
import ViewToggle from "../components/ViewToggle.jsx";

// CSS imports
import "../styles/weather.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [view, setView] = useState("one-day");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const [weatherData, setWeatherData] = useState([]);

  const searchCity = async (city) => {
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

      // Used by OneDayWeather component only (populated on index 0 only)
      feelsLikeTemp:
        index === 0 ? Math.round(data.list[index]?.main.feels_like) : null,
      cloudCoverage: index === 0 ? data.list[index]?.clouds.all : null,
      description:
        index === 0
          ? data.list[index]?.weather[0].description.replace(/\b\w/g, (c) =>
              c.toUpperCase()
            )
          : null,
    }));

    setWeatherData(formattedData);
    setInputValue("");
    setError("");
  };

  // First city search
  useEffect(() => {
    searchCity("Auckland");
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="root-container">
        <Error message={error} onClose={() => setError("")} />
        <ViewToggle view={view} setView={setView} />
        <div
          className={`weather-wrapper ${
            view === "three-day" ? "between" : "center"
          }`}
        >
          {view === "three-day"
            ? weatherData.map((data, index) => (
                <Paper className="three-day" key={index} elevation={0}>
                  <ThreeDayWeather weatherData={data} />
                </Paper>
              ))
            : weatherData[0] && (
                <Paper className="one-day" elevation={0}>
                  <OneDayWeather weatherData={weatherData[0]} />
                </Paper>
              )}
        </div>
        <div className="location">
          {weatherData.length > 0 && weatherData[0].location}
        </div>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          search={(city) => searchCity(city)}
        />
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
    </ThemeProvider>
  );
};

export default App;
