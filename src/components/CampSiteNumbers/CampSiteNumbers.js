import React from "react";
import styles from "./CampSiteNumbers.module.css";

// Displays available camp site types to CampView. Accepts props from CampView.
const CampSiteNumbers = (props) => {
  return (
    <React.Fragment>
      <h3>Campsites Avalable</h3>
      <div className={styles.details}>
        <div className={styles.individual}>
          <p className={styles.title}>Total Campsites</p>
          <p>{props.sites.totalSites}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>First Come, First Serve</p>
          <p>{props.firstCome}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Reservable</p>
          <p>{props.reservable}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Tent Only</p>
          <p>{props.sites.tentOnly}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>RV Only</p>
          <p>{props.sites.rvOnly}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Group</p>
          <p>{props.sites.group}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Horse</p>
          <p>{props.sites.horse}</p>
        </div>
        <div className={styles.individual}>
          <p className={styles.title}>Electrical Hookups</p>
          <p>{props.sites.electricalHookups}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CampSiteNumbers;
