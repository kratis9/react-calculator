import React from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";

const HistoryItem = ({ operandX, operator, operandY, answer }) => (
  <div className='cal-history-item'>
    <p className='expression'>
      {operandX} {operator} {answer.toLocaleString()}=
    </p>
    <p className='answer'>{operandY}</p>
  </div>
);

const CalHistory = ({ calculations }) => {
  console.log(calculations);
  return (
    <div className='cal-history'>
      <Navigation url='calculator' />

      {calculations &&
        calculations.map((expression, i) => (
          <HistoryItem key={i} {...expression} />
        ))}
    </div>
  );
};

export default connect((state) => state)(CalHistory);
