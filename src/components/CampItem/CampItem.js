import styles from "./CampItem.module.css";
import Button from "../ui/Button/Button";

// Displays individual camp details to CampsList. Passes selected camp info to App.
const CampItem = (props) => {
  // Lift selected camp info to App
  const viewCampHandler = () => {
    props.onViewCamp(props.camp);
  };

  console.log(props.camp);

  const addressAvailable = props.camp.addresses[0];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>{props.camp.name.toUpperCase()}</h3>
        {!addressAvailable && <p>Address data not available.</p>}
        {addressAvailable && <p>{props.camp.addresses[0].city}</p>}
      </div>
      <div>
        <Button
          className={styles.button}
          type="button"
          onClick={viewCampHandler}
        >
          VIEW CAMP
        </Button>
      </div>
    </div>
  );
};

export default CampItem;
