import styles from "./CampView.module.css";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import CampSiteNumbers from "../CampSiteNumbers/CampSiteNumbers";
import CampSiteAmenities from "../CampSiteAmenities/CampSiteAmenities";
import CampSiteAccessibility from "../CampSiteAccessibility/CampSiteAccessibility";
import CampSiteFees from "../CampSiteFees/CampSiteFees";
import CampSiteRegulations from "../CampSiteRegulations/CampSiteRegulations";
import CampSiteImages from "../CampSiteImages/CampSiteImages";
import Button from "../ui/Button/Button";

const CampView = (props) => {
  // Ensure valid info is sent to children
  const standardHoursPresent = props.camp.operatingHours.length > 0;
  const imagesPresent = props.camp.images.length > 0;

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
    
      <WeatherDisplay
          latitude={props.camp.latitude}
          longitude={props.camp.longitude}
        />
      <div className={styles.controls}>
        <Button onClick={props.onCloseCamp} className={styles.button}>
          RETURN
        </Button>
      </div>
    </div>
  );
};

export default CampView;
