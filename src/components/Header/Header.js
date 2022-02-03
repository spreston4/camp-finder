import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.small}>
        <h1>Camp Finder</h1>
      </div>
    </div>
  );
};

export default Header;
