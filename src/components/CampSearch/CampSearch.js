import { useState } from "react";
import useInput from "../../hooks/use-input";
import styles from "./CampSearch.module.css";
import div from "../ui/Card/Card";
import Button from "../ui/Button/Button";

const CampSearch = (props) => {
  const {
    value: enteredState,
    isValid: enteredStateIsValid,
    hasError: stateHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    resetHandler: stateResetHandler,
  } = useInput((value) =>
    value
      .trim()
      .match(
        /^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/gim
      )
  );

  let formIsValid = false;

  if (enteredStateIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onUpdateSearch(enteredState);
  };

  const stateClasses = stateHasError ? `${styles.invalid}` : "";

  return (
    <div className={styles.container}>
      <form onSubmit={formSubmissionHandler}>
        <div className={stateClasses}>
          <label htmlFor="state-input">
            <h3>FIND YOUR CAMP</h3>
          </label>
          <input
            onChange={stateChangeHandler}s
            onBlur={stateBlurHandler}
            value={enteredState}
            name="state-input"
            id="state-input"
            type="text"
          />
        </div>
        <Button className={styles.button} type="submit">
          SEARCH
        </Button>
      </form>
      {stateHasError && (
        <p className={styles.error}>Enter a valid state abbreviation: XX</p>
      )}
    </div>
  );
};

export default CampSearch;
