import styles from "./WeatherDisplayItem.module.css";

const dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeatherDisplayItem = (props) => {
  const forecastDateData = new Date(props.forecast.dt * 1000);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{dayArray[forecastDateData.getDay()]}</p>
      <p>{forecastDateData.toLocaleDateString("en-US")}</p>
      <img
        src={`https://openweathermap.org/img/w/${props.forecast.weather[0].icon}.png`}
      />
      <p>High: {props.forecast.temp.max.toFixed()} ℉</p>
      <p>Low: {props.forecast.temp.min.toFixed()} ℉</p>
      <p>Wind: {props.forecast.windSpeed.toFixed()} MPH</p>
      <p>Humidity: {props.forecast.humidity.toFixed()} %</p>
    </div>
  );
};

export default WeatherDisplayItem;
