import React from "react";
import styles from "./CampSiteFees.module.css";

// Displays all camp site fee information to CampView.
const CampSiteFees = (props) => {
  return (
    <React.Fragment>
      <h3>Fees</h3>
      {props.fees.map((fee) => (
        <div>
          <p className={styles.title}>
            ${fee.cost} - {fee.title}
          </p>
          <p className={styles.description}>{fee.description}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default CampSiteFees;
