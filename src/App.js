import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import CalHistory from "./components/CalHistory";


const App = () => (
  <div className='app'>
    <Router>
      <div>
        <Route exact path='/' component={Calculator} />
        <Route exact path='/calculator' component={Calculator} />
        <Route exact path='/history' component={CalHistory} />
      </div>
    </Router>
  </div>
);

export default App;
