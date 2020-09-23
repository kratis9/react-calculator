import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Display({ display }) {
  return (
    <div>
      <div className='cal-display'>{(+display).toLocaleString()}</div>
    </div>
  );
}

Display.propTypes = {
  display: PropTypes.string.isRequired,
};

export default connect((state) => state)(Display);
