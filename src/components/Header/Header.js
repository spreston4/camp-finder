import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
        <div className={styles.title}>
          <h1>Camp Finder</h1>
        </div>
        <div className={styles.front}></div>
        <div className={styles.middle}></div>
        <div className={styles.back}></div>
    </React.Fragment>
  );
};

export default Header;
