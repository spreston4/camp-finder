import { useState, useRef } from "react";
import stateList from "../../store/state-list";
import styles from "./CampSearch.module.css";
import Button from "../ui/Button/Button";

// Allows the user to select a state to view campgrounds. Pulls selection data frm store/state-list. Passes selected state abbreviation to CampsList through App.
const CampSearch = (props) => {
  const [selectedState, setSelectedState] = useState({
    name: "",
    abbreviation: "",
  });
  const [hasError, stateHasError] = useState(false);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // Ensure valid state is selected.
    if (selectedState.abbreviation.length === 0) {
      stateHasError(true);
      return;
    }
    // Lift state to App.
    props.onUpdateSearch(selectedState);
  };

  const selectChangeHandler = (event) => {
    // Reset error state if it exists.
    stateHasError(false);
    setSelectedState({
      name: event.target[event.target.selectedIndex].getAttribute("data-name"),
      abbreviation: event.target.value,
    });
  };

  // Conditional formatting for error state.
  const stateClasses = hasError ? `${styles.invalid}` : "";

  return (
    <div className={styles.container}>
      <form onSubmit={formSubmissionHandler}>
        <div className={stateClasses}>
          <label htmlFor="state-input">
            <h3>FIND YOUR CAMP</h3>
          </label>
          <select
            onChange={selectChangeHandler}
            name="state-selector"
            id="state-selector"
          >
            <option value="">Select a state</option>
            {stateList.map((state) => (
              <option
                key={state.abbreviation}
                value={state.abbreviation}
                data-name={state.name}
              >
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <Button className={styles.button} type="submit">
          SEARCH
        </Button>
      </form>
      {hasError && <p className={styles.error}>Please select a state.</p>}
    </div>
  );
};

export default CampSearch;
