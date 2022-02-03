import { useState, useEffect } from "react";
import styles from "./WeatherDisplay.module.css";

const WeatherDisplay = (props) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&units=imperial&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
        );
        const data = await response.json();
        const forecastData = data.daily;
        const loadedForecast = [];

        for (const key in forecastData) {
            loadedForecast.push({
                key: key,
                dt: forecastData[key].dt,
                feelsLike: forecastData[key].feels_like,
                humidity: forecastData[key].humidity,
                sunrise: forecastData[key].sunrise,
                sunset: forecastData[key].sunset,
                temp: forecastData[key].temp,
                uvi: forecastData[key].uvi,
                weather: forecastData[key].weather,
                windGust: forecastData[key].wind_gust,
                windSpeed: forecastData[key].wind_speed,
            });
        }

        setForecast(loadedForecast);
      } catch (error) {
        console.error("Error fetching weather: ", error);
      }
    };

    fetchWeather();
  }, [props]);

  console.log(forecast);

  return (
    <div className={styles.container}>
      <p>Weather Display</p>
    </div>
  );
};

export default WeatherDisplay;
