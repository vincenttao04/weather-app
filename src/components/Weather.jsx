import React, { useEffect, useRef, useState } from "react";
import { fetchWeather } from "../services/weatherApiService.js";
import "../styles/Weather.css";
import humidity_icon from "../assets/humidity.png";
import search_icon2 from "../assets/search2.png";
import weatherIcons from "../utils/weatherIcons.js";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const search = async (city) => {
    // calls openweather api
    const data = await fetchWeather(city);

    // add check for api validity, incase api isn't working properly , etc.
    if (data !== null) {
      console.log(data);
      const icon = weatherIcons[data.weather[0].icon] || weatherIcons["01d"];
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

  // if (!weatherData)
  //   return (
  //     <div className="error-display">
  //       <p>hi</p>
  //     </div>
  //   );

  return (
    <div className="root-container">
      <div className="weather">
        {weatherData ? (
          <>
            {" "}
            <img src={weatherData.icon} alt="" className="weather-icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                  <p>{weatherData.humidity} %</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                  <p>{weatherData.windSpeed} km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue.trim() !== "") {
              search(inputValue);
            }
          }}
        />
        <img
          src={search_icon2}
          alt=""
          onClick={() => {
            if (inputValue) search(inputValue);
          }}
          className={inputValue === "" ? "disabled" : ""}
        />
      </div>
    </div>
  );
};

export default Weather;
