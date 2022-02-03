import { useState } from "react";
import styles from "./Button.module.css";

// Reusable button component. Inherits className and Onclick from parent.
const Button = (props) => {
  const [isHover, setIsHover] = useState(false);

  const addHoverHandler = () => {
    setIsHover(true);
  };

  const removeHoverHandler = () => {
    setIsHover(false);
  };

  const buttonClasses = `${styles.button} ${props.className} ${
    isHover ? styles.hover : ""
  }`;

  const arrowClasses = `${styles.arrow} ${
    isHover ? styles.show : styles.hidden
  }`;

  return (
    <button
      className={buttonClasses}
      onMouseEnter={addHoverHandler}
      onMouseLeave={removeHoverHandler}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children} <span className={arrowClasses}>></span>
    </button>
  );
};

export default Button;
