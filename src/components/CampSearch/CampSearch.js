import styles from "./CampSearch.module.css";
import Card from "../ui/Card/Card";
import Button from "../ui/Button/Button";

const CampSearch = (props) => {
    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    };
  return (
    <Card className={styles.container}>
      <form onSubmit={formSubmissionHandler}>
        <label htmlFor="state-input">Search a state for campgrounds!</label>
        <input name="state-input" id="state-input" type="text" />
        <Button alt={false}>Submit</Button>
      </form>
    </Card>
  );
};

export default CampSearch;
