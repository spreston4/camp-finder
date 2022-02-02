import styles from "./CampItem.module.css";

const CampItem = (props) => {
  return <div className={styles.container}>{props.camp.name}</div>;
};

export default CampItem;
