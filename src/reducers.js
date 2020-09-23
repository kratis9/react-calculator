import MathEngine from "./math-engine";

//updateCalculation

const initState = {
  calculations: [],
  display: "0",
  engine: new MathEngine(),
  onKeyPress: () => {},
};

const KEY_PRESS = "KEY_PRESS";
const DISPLAY_UPDATE = "DISPLAY_UPDATE";
const UPDATE_CALCULATION = "UPDATE_CALCULATION";

export const updateDisplay = (val) => ({
  type: DISPLAY_UPDATE,
  payload: val,
});

export const keyPressSelected = (key) => ({
  type: KEY_PRESS,
  payload: key,
});

export const updateCalculations = () => ({
  type: UPDATE_CALCULATION,
});

export default (state = initState, action) => {
  switch (action.type) {
    case KEY_PRESS:
      return { ...state, display: state.engine.calculate(action.payload) };
    case DISPLAY_UPDATE:
      return { ...state, display: state.display };
    case UPDATE_CALCULATION:
      return {
        ...state,
        calculations: state.calculations.concat([state.engine.getExpression()]),
      };
    default:
      return state;
  }
};
