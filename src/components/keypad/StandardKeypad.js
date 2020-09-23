import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

export const standardControls = [
  { content: "AC", type: "function" },
  { content: "±", type: "function" },
  { content: "%", type: "function" },
  { content: "÷", type: "operator" },
  { content: "7", type: "" },
  { content: "8", type: "" },
  { content: "9", type: "" },
  { content: "x", type: "operator" },
  { content: "4", type: "" },
  { content: "5", type: "" },
  { content: "6", type: "" },
  { content: "-", type: "operator" },
  { content: "1", type: "" },
  { content: "2", type: "" },
  { content: "3", type: "" },
  { content: "+", type: "operator" },
  { content: "0", type: "" },
  { content: ".", type: "" },
  { content: "=", type: "operator" },
];

function StandardKeypad() {
  return (
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
  );
}

export default StandardKeypad;
