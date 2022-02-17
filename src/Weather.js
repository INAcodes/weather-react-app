import React, { useState } from "react";

import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("null");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState("false");

  function displayWeather(response) {
    console.log(response);
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d17fa40e825be2790f261dab24f52143";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <strong>Temperature:</strong> {Math.round(weather.temp)}°C{" "}
          </li>
          <li>
            <strong>Description:</strong> {weather.description}
          </li>
          <li>
            <strong>Humidity:</strong> {weather.humidity}%
          </li>
          <li>
            <strong>Windspeed:</strong> {Math.round(weather.wind)} km/h
          </li>
          <li>
            <img src={weather.icon} alt="weather-icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
