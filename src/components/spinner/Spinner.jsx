import React from "react";
import classes from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={classes.loadingSpinnerContainer}>
      <div className={classes.loadingSpinner}></div>
    </div>
  );
}

export default Spinner;
