// Code Keypad Component Here

import React from "react";

const Keypad = () => {
  const changeHandler = () => console.log("Entering password...");

  return (
    <div>
      <input type="password" onChange={changeHandler} />
    </div>
  );
};

export default Keypad