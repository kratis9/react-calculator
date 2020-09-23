import React from "react";
import Display from "./Display";
import Keypad from "./keypad/Keypad";
import Navigation from "./Navigation";

//action dispatcher
const Calculator = () => {
  return (
    <div>
      <Navigation url='history' />
      <Display />
      <Keypad />
    </div>
  );
};
export default Calculator;
