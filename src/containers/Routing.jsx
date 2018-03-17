import React, { Component } from 'react';
import App from './App.jsx';
import About from './About.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default Routing;
