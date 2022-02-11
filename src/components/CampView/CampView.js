import { useState } from "react";
import styles from "./CampView.module.css";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import CampSiteNumbers from "../CampSiteNumbers/CampSiteNumbers";
import CampSiteAmenities from "../CampSiteAmenities/CampSiteAmenities";
import CampSiteAccessibility from "../CampSiteAccessibility/CampSiteAccessibility";
import CampSiteFees from "../CampSiteFees/CampSiteFees";
import CampSiteRegulations from "../CampSiteRegulations/CampSiteRegulations";
import CampSiteImages from "../CampSiteImages/CampSiteImages";
import Button from "../ui/Button/Button";

// Displays relevant info on selected camp to user. Receives info from App after user selects the camp from CampList. Passes select info to children components named 'CampSiteXYZ'.
const CampView = (props) => {
  const [showWeatherStyle, setShowWeatherStyle] = useState(false);
  const [showWeatherContainer, setShowWeatherContainer] = useState(false);

  // Ensure valid info is sent to children
  const standardHoursPresent = props.camp.operatingHours.length > 0;
  const imagesPresent = props.camp.images.length > 0;

  // Controls animation styling and hiding weather div seperately. Wonky, but don't want to leave an empty space when the div should be hidden.
  const toggleWeatherHandler = () => {
    if (showWeatherContainer) {
      setTimeout(() => {
        setShowWeatherContainer(!showWeatherContainer);
      }, 300);
      setShowWeatherStyle(!showWeatherStyle);
    } else {
      setShowWeatherContainer(!showWeatherContainer);
      setShowWeatherStyle(!showWeatherStyle);
    }
  };

  // Conditional animation styling for weather div.
  const weatherClasses = showWeatherStyle
    ? `${styles.visible}`
    : `${styles.hidden}`;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{props.camp.name}</h2>
        {imagesPresent && <CampSiteImages images={props.camp.images} />}
        <h3>Description</h3>
        <p>{props.camp.description}</p>

        <CampSiteNumbers
          sites={props.camp.campsites}
          firstCome={props.camp.numberOfSitesFirstComeFirstServe}
          reservable={props.camp.numberOfSitesReservable}
        />
        <CampSiteAmenities amenities={props.camp.amenities} />
        <CampSiteAccessibility
          access={props.camp.accessibility}
          directions={props.camp.directionsOverview}
          directionsUrl={props.camp.directionsUrl}
          hours={props.camp.operatingHours}
          hoursPresent={standardHoursPresent}
        />
        <CampSiteFees fees={props.camp.fees} />
        <CampSiteRegulations
          regs={props.camp.regulationsOverview}
          res={props.camp.reservationInfo}
          contacts={props.camp.contacts}
        />
      </div>
      {showWeatherContainer && (
        <div className={weatherClasses}>
          <WeatherDisplay
            latitude={props.camp.latitude}
            longitude={props.camp.longitude}
          />
        </div>
      )}
      <div className={styles.controls}>
        <Button onClick={props.onCloseCamp} className={styles.button}>
          RETURN TO SEARCH
        </Button>
        <Button onClick={toggleWeatherHandler} className={styles.button}>
          TOGGLE WEATHER
        </Button>
      </div>
    </div>
  );
};

export default CampView;
