import { useState } from "react";
import styles from "./CampSearch.module.css";
import Card from "../ui/Card/Card";
import Button from "../ui/Button/Button";

const CampSearch = (props) => {
    // TODO: Setting state twice - look at implementing context
    const [searchTerms, setSearchTerms] = useState();

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        // TODO: Add validation
        props.onUpdateSearch(searchTerms)
    };

    const inputChangeHandler = (event) => {
        setSearchTerms(event.target.value);
    };

  return (
    <Card className={styles.container}>
      <form onSubmit={formSubmissionHandler}>
        <label htmlFor="state-input">Search a state for campgrounds!</label>
        <input onChange={inputChangeHandler} name="state-input" id="state-input" type="text" />
        <Button alt={false}>Submit</Button>
      </form>
    </Card>
  );
};

export default CampSearch;
