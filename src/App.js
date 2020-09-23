import React, { Component } from "react";

import Display from "./components/Display";
import Keypad from "./components/Keypad";
import MatchEngine from "./math-engine";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      display: "0",
      engine: new MatchEngine(),
    };

    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(key) {
    this.setState({
      display: this.state.engine.calculate(key),
    });

    // if (key === "=") {
    //   this.updateHistory();
    // }
  }

  updateHistory() {
    const expression = this.state.engine.getExpression();
    if (expression) {
      this.setState({
        ...this.state,
        history: [...this.state.history, this.state.engine.getExpression()],
      });
    }
  }

  render() {
    const { display } = this.state;
    return (
      <div className='App'>
        <Display display={display} />
        <Keypad onKeyPress={this.onKeyPress} />
      </div>
    );
  }
}

export default App;
