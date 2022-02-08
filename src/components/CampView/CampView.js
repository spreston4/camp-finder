import styles from './CampView.module.css';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import CampSiteNumbers from '../CampSiteNumbers/CampSiteNumbers';
import Button from '../ui/Button/Button';

const CampView = (props) => {
    console.log(props.camp);
    return (
        <div className={styles.container}>
            <div className={styles.content}>
               <h2>{props.camp.name}</h2>
               <p>{props.camp.description}</p>
               <CampSiteNumbers sites={props.camp.campsites} firstCome={props.camp.numberOfSitesFirstComeFirstServe} reservable={props.camp.numberOfSitesReservable} />
            </div>
            <div className={styles.weather}>
                <WeatherDisplay latitude={props.camp.latitude} longitude={props.camp.longitude} />
            </div>
            <div className={styles.controls}>
                <Button onClick={props.onCloseCamp} className={styles.button}>RETURN</Button>
            </div>
        </div>
    );
};

export default CampView;