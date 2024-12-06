import React, { useState } from "react";

export default function Form(props) {
  let [temperature, setTemperature] = useState("");

  function showWeather(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div className="Form">
      <form>
        <input type="text" placeholder="Search for city" />
        <button onClick={showWeather}>Search</button>
      </form>
      <h2>{temperature} </h2>
    </div>
  );
}
