import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

// Displays site ttile to the user. Remains fixed tot eh top of the window & scales as the user scrolls the page.
const Header = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsSmall(window.pageYOffset > 350)
      );
    }
  }, []);

  const titleClasses = `${styles.title} ${isSmall ? styles.small : ""}`;

  return (
    <div className={styles.container}>
      <div className={titleClasses}>
        <h1>CAMP FINDER</h1>
      </div>
    </div>
  );
};

export default Header;
