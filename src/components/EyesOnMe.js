// Code EyesOnMe Component Here
import React from "react";

const EyesOnMe = () => {
  const focusHandler = () => console.log("Good!");
  const blurHandler = () => console.log("Hey! Eyes on me!");
  return (
    <div>
      <button onFocus={focusHandler} onBlur={blurHandler}>
        Eyes on me
      </button>
    </div>
  );
};

export default EyesOnMe;