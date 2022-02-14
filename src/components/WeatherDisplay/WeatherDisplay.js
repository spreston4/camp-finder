import { useState, useEffect } from "react";
import styles from "./WeatherDisplay.module.css";
import WeatherDisplayItem from "../WeatherDisplayItem/WeatherDisplayItem";
import loadingImage from "../../assets/images/Spinner-1s-200px-white.gif";

// Displays a 7-day weather forecast to the user when toggled in CampView. Renders a WeatherDisplayItem for each day. Recieves location data from CampView and passes weather data to WeatherDisplayItem.
const WeatherDisplay = (props) => {
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching weather: ", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className={styles.container}>
      <h3>Weather: 7-Day Forecast</h3>
      {isLoading && <img src={loadingImage} />}
      <div className={styles.forecast}>
        {!isLoading &&
          forecast
            .slice(1, 8)
            .map((day) => <WeatherDisplayItem key={day.key} forecast={day} />)}
      </div>
    </div>
  );
};

export default WeatherDisplay;
