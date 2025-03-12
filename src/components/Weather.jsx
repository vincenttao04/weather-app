import React, { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherApiService.js";
import "../styles/weather.css";
import weatherIcons from "../utils/weatherIcons.js";
import WeatherData from "./WeatherData.jsx";
import SearchBar from "./SearchBar.jsx";
import moment from "moment";

const Weather = () => {
  const [weatherDataOne, setWeatherDataOne] = useState(null);
  const [weatherDataTwo, setWeatherDataTwo] = useState(null);
  const [weatherDataThree, setWeatherDataThree] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const search = async (city) => {
    // calls openweather api
    const data = await fetchWeather(city);

    if (data !== null) {
      console.log(data);
      const iconOne =
        weatherIcons[data?.list[0]?.weather[0]?.icon] || weatherIcons["01d"];

      const iconTwo =
        weatherIcons[data?.list[8]?.weather[0]?.icon] || weatherIcons["01d"];
      const iconThree =
        weatherIcons[data?.list[16]?.weather[0]?.icon] || weatherIcons["01d"];

      setWeatherDataOne({
        humidity: data.list[0].main.humidity,
        windSpeed: data.list[0].wind.speed,
        temperature: Math.round(data.list[0].main.temp),
        location: data.city.name,
        icon: iconOne,
        date: moment.unix(data.list[0].dt).format("dddd D MMMM"),
      });

      setWeatherDataTwo({
        humidity: data.list[8].main.humidity,
        windSpeed: data.list[8].wind.speed,
        temperature: Math.round(data.list[8].main.temp),
        location: data.city.name,
        icon: iconTwo,
        date: moment.unix(data.list[8].dt).format("dddd D MMMM"),
      });

      setWeatherDataThree({
        humidity: data.list[16].main.humidity,
        windSpeed: data.list[16].wind.speed,
        temperature: Math.round(data.list[16].main.temp),
        location: data.city.name,
        icon: iconThree,
        date: moment.unix(data.list[16].dt).format("dddd D MMMM"),
      });
    }

    // Reset input field to empty string after a successful search
    setInputValue("");
  };

  // Initial city search when loading weather app.
  useEffect(() => {
    search("Auckland");
  }, []);

  return (
    <div className="root-container">
      <div className="weather-wrapper">
        <div className="weather">
          {weatherDataOne ? (
            <WeatherData weatherData={weatherDataOne} />
          ) : (
            <></>
          )}
        </div>
        <div className="weather">
          {weatherDataTwo ? (
            <WeatherData weatherData={weatherDataTwo} />
          ) : (
            <></>
          )}
        </div>
        <div className="weather">
          {weatherDataThree ? (
            <WeatherData weatherData={weatherDataThree} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="location">
        {weatherDataOne ? <p>{weatherDataOne.location}</p> : <></>}
      </div>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        search={search}
      />
    </div>
  );
};

export default Weather;
