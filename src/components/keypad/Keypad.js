import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { useMediaQuery } from "react-responsive";
import StandardKeypad from "./StandardKeypad";
import ScientificKeypad from "./ScientificKeypad";
import { updateDisplay } from "../../reducers";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

function Keypad({ updateDisplay }) {
  return (
    <>
      <Default>
        <ScientificKeypad />
      </Default>

      <Mobile>
        <StandardKeypad />
      </Mobile>
    </>
  );
}

Keypad.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
};

export default connect((state) => state, updateDisplay)(Keypad);
