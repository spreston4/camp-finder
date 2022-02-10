import React from "react";
import styles from "./CampSiteAccessibility.module.css";

// Displays all accessibility info to the CampView. Camp classifications, Directions, & Operating Hours.
const CampSiteAccessibility = (props) => {
  return (
    <React.Fragment>
      <h3>Accessibility</h3>
      <p>{props.access.adaInfo}</p>
      <div className={styles.details}>
        <div className={styles.individual}>
          <p className={styles.title}>Classification</p>
          {props.access.classifications.map((classification) => (
            <p key={Math.random()}>{classification}</p>
          ))}
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Access Roads</p>
          {props.access.accessRoads.map((road) => (
            <p key={Math.random()}>{road}</p>
          ))}
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Max RV Length</p>
          <p>{props.access.rvMaxLength}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Max Trailer Length</p>
          <p>{props.access.trailerMaxLength}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>RV Info</p>
          <p>{props.access.rvInfo}</p>
        </div>
      </div>
      <h3>Directions</h3>
      <p>{props.directions}</p>
      <p>
        <a href={props.directionsUrl} target="_blank">
          Directions
        </a>
      </p>
      {props.hoursPresent && (
        <div>
          <h3>Operating Hours</h3>
          <p>{props.hours[0].description}</p>
          <div className={styles.details}>
            <div className={styles.individual}>
              <p className={styles.title}>Monday</p>
              <p>{props.hours[0].standardHours.monday}</p>
            </div>
            <div className={styles.individual}>
              <p className={styles.title}>Tuesday</p>
              <p>{props.hours[0].standardHours.tuesday}</p>
            </div>
            <div className={styles.individual}>
              <p className={styles.title}>Wednesday</p>
              <p>{props.hours[0].standardHours.wednesday}</p>
            </div>
            <div className={styles.individual}>
              <p className={styles.title}>Thursday</p>
              <p>{props.hours[0].standardHours.thursday}</p>
            </div>
            <div className={styles.individual}>
              <p className={styles.title}>Friday</p>
              <p>{props.hours[0].standardHours.friday}</p>
            </div>
            <div className={styles.individual}>
              <p className={styles.title}>Saturday</p>
              <p>{props.hours[0].standardHours.saturday}</p>
            </div>
            <div className={styles.individual}>
              <p className={styles.title}>Sunday</p>
              <p>{props.hours[0].standardHours.sunday}</p>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CampSiteAccessibility;
