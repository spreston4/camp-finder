import React from "react";
import styles from "./CampSiteAmenities.module.css";

// Displays available amenities to CampView. Accepts amenities as props from CampView.
const CampSiteAmenities = (props) => {
  return (
    <React.Fragment>
      <h3>Amenities Available</h3>
      <div className={styles.details}>
        <div className={styles.individual}>
          <p className={styles.title}>Amphitheater</p>
          <p>{props.amenities.amphitheater}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Camp Store</p>
          <p>{props.amenities.campStore}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Cell Reception</p>
          <p>{props.amenities.cellPhoneReception}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Dump Station</p>
          <p>{props.amenities.dumpStation}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Firewood</p>
          <p>{props.amenities.firewoodForSale}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Food Storage</p>
          <p>{props.amenities.foodStorageLockers}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Ice</p>
          <p>{props.amenities.iceAvailableForSale}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Internet</p>
          <p>{props.amenities.internetConnectivity}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Laundry</p>
          <p>{props.amenities.laundry}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Potable Water</p>
          {props.amenities.potableWater.map((water) => (
            <p key={Math.random()}>{water}</p>
          ))}
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Showers</p>
          {props.amenities.showers.map((shower) => (
            <p key={Math.random()}>{shower}</p>
          ))}
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Staff on Site</p>
          <p>{props.amenities.staffOrVolunteerHostOnsite}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Toilets</p>
          {props.amenities.toilets.map((toilet) => (
            <p key={Math.random()}>{toilet}</p>
          ))}
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Trash Collection Point</p>
          <p>{props.amenities.trashRecyclingCollection}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CampSiteAmenities;
