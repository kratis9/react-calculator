import React from "react";
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

export default function Keypad() {
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
