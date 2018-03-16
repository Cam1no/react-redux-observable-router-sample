import React, { Component } from 'react';
import App from './App.jsx';
import About from './About.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Routing;
