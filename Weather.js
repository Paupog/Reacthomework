import React from "react";

export default function Weather(props) {
  return (
    <div>
      <ul>
        <li>City: {data.city}</li>
        <li>Temperature: {data.temperature} °C</li>
        <li>Humidity: {data.humidity} %</li>
        <li>Wind Speed: {data.windSpeed} km/h</li>
      </ul>
    </div>
  );
}
