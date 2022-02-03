import { useState, useEffect } from "react";
import styles from "./WeatherDisplay.module.css";

const WeatherDisplay = (props) => {
  console.log(props);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
        );
        const data = await response.json();
        console.log(data);

      } catch (error) {
        console.error("Error fetching weather: ", error);
      }
    };

    fetchWeather();
  }, [props]);

  return (
    <div className={styles.container}>
      <p>Weather Display</p>
    </div>
  );
};

export default WeatherDisplay;
