import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";
import { standardControls } from "./StandardKeypad";

const controls = [
  { content: "(", type: "function" },
  { content: ")", type: "function" },
  { content: "mc", type: "function" },
  { content: "m+", type: "function" },
  { content: "m-", type: "" },
  { content: "mr", type: "" },
  { content: "EC", type: "" },
  { content: "sqrt", type: "" },
  { content: "cube", type: "" },
  { content: "sin", type: "" },
  { content: "cos", type: "" },
  { content: "tan", type: "" },
  { content: "cosh", type: "" },
  { content: "tanh", type: "" },
  { content: "Rad", type: "" },
  { content: "x!", type: "" },
  { content: "log", type: "" },
  { content: "EE", type: "" },
  { content: "TT", type: "" },
  { content: "x^2", type: "" },
];

function ScientificKeypad() {
  return (
    <div className='scientific-keypad'>
      <div className='btn-container'>
        {controls.map((control) => {
          return (
            <Button
              key={control.content}
              content={control.content}
              type={control.type}
            />
          );
        })}
      </div>
      <div className='btn-container'>
        {standardControls.map((control) => {
          return (
            <Button
              key={control.content}
              content={control.content}
              type={control.type}
            />
          );
        })}
      </div>
      <div />
    </div>
  );
}

export default ScientificKeypad;
