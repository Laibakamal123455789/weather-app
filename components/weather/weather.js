"use client";
import React, { useEffect, useState } from 'react';
import "./weather.css"
export default function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      // fetch(`https://api.weatherapi.com/v1/current.json?key=f9c9912243994180a7b124942240710&q=${city}&aqi=no`)
        
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
      {/* Show error message if any */}
      {error && <div className="error-message">{error}</div>}

      {/* Show loading state */}
      {!weather && !error && <div>Loading weather data...</div>}

      {/* Show weather details if available */}
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







// "use client";
// import { useEffect, useState } from "react";
// import "./weather.css"
// export default function Weather({city}){
 
//   let [weather,setWeather] = useState(null)


  
  
//   useEffect(()=>{
//     if(city){
//       fetch(`http://api.weatherapi.com/v1/current.json?key=f9c9912243994180a7b124942240710&q=${city}&aqi=no`)
//       .then((resp)=>resp.json())
//       .then((data)=>{
//         if(!data.error){
//           setWeather(data);
          
//         }
//         else{
//           alert("enter a valid city")
//         }
        
//       })
//       .catch(()=>{
//         setWeather(null)
//       })
//     }
    
//   },[city])
//   if (!weather) {
  
//     return <div>Loading weather data...</div>;
//   }
  
//   return (
    
//     <div className="weather-card">
//     <img src={`https:${weather.current.condition.icon}`}  className="weather-icon"  />
//     <h2>{weather.location.name}</h2>
//     <p>{weather.current.temp_c}°C</p>
//     <p>{weather.current.condition.text}</p>

//     <div className="details">
//       <div>
//         <p>Humidity:{weather.current.humidity}%</p>
//       </div>
//       <div>
//         <p>Wind:{weather.current.wind_kph}km/h</p>
//       </div>
//     </div>

//     </div>
//   )
// }







// // "use client";
// // import "./weather.css"
// // import React, { useState, useEffect } from 'react';

// // const Weather = ({ city }) => {
// //   const [weather, setWeather] = useState(null);
// //   const [error, setError] = useState(null);  // New state to store error message

// //   useEffect(() => {
// //     if (city) {
// //       fetch(`http://api.weatherapi.com/v1/current.json?key=f9c9912243994180a7b124942240710&q=${city}&aqi=no`)
// //         .then((response) => response.json())
// //         .then((data) => {
// //           if (data.error) {
// //             // Handle error if the city is invalid
// //             setError("Please enter a valid city name.");
// //             setWeather(null);  // Clear previous weather data
// //           } else {
// //             setWeather(data);
// //             setError(null);  // Reset error if the city is valid
// //           }
// //         })
// //         .catch((error) => {
// //           setError("Error fetching weather data.");
// //           setWeather(null);
// //         });
// //     }
// //   }, [city]); // Runs every time the city prop changes

// //   // Display the error message if there is one
// //   if (error) {
// //     return <div className="error-message">{error}</div>;
// //   }

// //   if (!weather) {
// //     return <div>Enter a city to get the weather.</div>;
// //   }

// //   const weatherIconUrl = `https:${weather.current.condition.icon}`;

// //   return (
// //     <div className="weather">
// //       <img src={weatherIconUrl} alt={weather.current.condition.text} className="weather-icon" />
// //       <h2>{weather.location.name}</h2>
// //       <p>{weather.current.temp_c}°C</p>
// //       <p>{weather.current.condition.text}</p>
// //       <div className="details">
// //         <div>
// //           <p>Humidity: {weather.current.humidity}%</p>
// //         </div>
// //         <div>
// //           <p>Wind: {weather.current.wind_kph} km/h</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Weather;
