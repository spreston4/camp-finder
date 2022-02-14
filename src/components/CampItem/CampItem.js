import styles from "./CampItem.module.css";
import Button from "../ui/Button/Button";

// Displays individual camp details to CampsList. Passes selected camp info to App.
const CampItem = (props) => {
  // Lift selected camp info to App
  const viewCampHandler = () => {
    props.onViewCamp(props.camp);
  };

  // Ensure valid data is present. Instead of returning an empty value for the property if data is not present, the API doesn't return the property at all - resulting in an app-breaking error.
  const addressAvailable = props.camp.addresses[0];
  const emailAvailable = props.camp.contacts.emailAddresses.length > 0;
  const phoneAvailable = props.camp.contacts.phoneNumbers.length > 0;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>{props.camp.name.toUpperCase()}</h3>
        {addressAvailable && (
          <div>
            <p>
              {props.camp.addresses[0].city},{" "}
              {props.camp.addresses[0].stateCode}{" "}
              {props.camp.addresses[0].postalCode}
            </p>
          </div>
        )}
        {emailAvailable && (
          <p>
            <a
              href={`mailto:${props.camp.contacts.emailAddresses[0].emailAddress}`}
              target="_blank"
            >
              E-Mail
            </a>
          </p>
        )}
        {phoneAvailable && (
          <p>{props.camp.contacts.phoneNumbers[0].phoneNumber}</p>
        )}
        <br />
        <p>{props.camp.description}</p>
      </div>
      <div className={styles.controls}>
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
