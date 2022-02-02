import styles from "./CampItem.module.css";
import Button from "../ui/Button/Button";

const CampItem = (props) => {
  const viewCampHandler = () => {
    props.onViewCamp(props.camp);
  };
  return (
    <div className={styles.container}>
      {props.camp.name}
      <Button onClick={viewCampHandler} alt={false}>View</Button>
    </div>
  );
};

export default CampItem;
