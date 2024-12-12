"use client";
import React, { useEffect, useState } from 'react';
import "./weather.css"
export default function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
       const normalizedCity = city.toLowerCase();
  
        
      fetch(`https://api.weatherapi.com/v1/current.json?key=f9c9912243994180a7b124942240710&q=${city}&aqi=no`)

      .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setWeather(null);
            setError("Invalid city name. Please try again.");
          } else {
            setWeather(data);
            setError(null);
          }
        })
        .catch(() => {
          setWeather(null);
          setError("Something went wrong! Please try again later.");
        });
    }
  }, [city]);

  return (
    <div>
    
      {error && <div className="error-message">{error}</div>}

  
      {!weather && !error && <div>Loading weather data...</div>}

 
      {weather && (
        <div className='weather-card'>
          <img src={`https:${weather.current.condition.icon}`} className='weather-icon' alt="Weather Icon" />
          <h2>{weather.location.name}</h2>
          <p>{weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
          <div className='details'>
            <p>Humidity: {weather.current.humidity}%</p>
            <p>Wind: {weather.current.wind_kph} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
}





