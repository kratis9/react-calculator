import React from "react";
import PropTypes from "prop-types";

import { useMediaQuery } from "react-responsive";
import StandardKeypad from "./StandardKeypad";
import ScientificKeypad from "./ScientificKeypad";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

function Keypad({ onKeyPress }) {
  return (
    <>
      <Default>
        <ScientificKeypad
          handleSelection={(e) => {
            onKeyPress(e);
          }}
        />
      </Default>

      <Mobile>
        <StandardKeypad
          handleSelection={(e) => {
            onKeyPress(e);
          }}
        />
      </Mobile>
    </>
  );
}

Keypad.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
};

export default Keypad;
