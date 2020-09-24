import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../store";
import { keyPressSelected, updateCalculations } from "../reducers";

function Button({ content, type }) {
  return (
    <button
      type="button"
      className={`btn ${content === "0" ? "zero" : ""} ${type || ""}`}
      onClick={(e) => {
        store.dispatch(keyPressSelected(e.target.innerText));
        if (e.target.innerText === "=") {
          store.dispatch(updateCalculations());
        }
      }}>
      {content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default connect((state) => state, {
  keyPressSelected,
  updateCalculations,
})(Button);
