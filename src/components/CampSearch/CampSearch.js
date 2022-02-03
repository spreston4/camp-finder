import { useState } from "react";
import useInput from "../../hooks/use-input";
import styles from "./CampSearch.module.css";
import Card from "../ui/Card/Card";
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
    <Card className={styles.container}>
      <form onSubmit={formSubmissionHandler}>
        <div className={stateClasses}>
          <label htmlFor="state-input">
            Search for campgrounds by State ID!
          </label>
          <input
            onChange={stateChangeHandler}
            onBlur={stateBlurHandler}
            value={enteredState}
            name="state-input"
            id="state-input"
            type="text"
          />
        </div>
        <Button alt={false} type="submit">
          Submit
        </Button>
      </form>
      {stateHasError && (
        <p className={styles.error}>Enter a valid state abbreviation: XX</p>
      )}
    </Card>
  );
};

export default CampSearch;
