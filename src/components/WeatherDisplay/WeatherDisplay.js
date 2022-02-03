import styles from './WeatherDisplay.module.css';

const WeatherDisplay = (props) => {
    console.log(props);
    return (
    <div className={styles.container}>
        <p>Weather Display</p>
    </div>
    );
};

export default WeatherDisplay;