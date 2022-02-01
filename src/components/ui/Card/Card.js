import styles from "./Card.module.css";

// Reusable card component - accepts parent component styling
const Card = (props) => {
  const cardClasses = `${styles.card} ${props.className}`;
  return <div className={cardClasses}>{props.children}</div>;
};

export default Card;
