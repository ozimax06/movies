import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Link, Switch, Redirect } from "react-router-dom";
import DetailView from "./views/DetailView";
import HomeView from "./views/HomeView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu">
          <ul>
            <li>
              {" "}
              <Link to="/">HomeView</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/movie">DetailView</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/movie/:id" component={DetailView} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
