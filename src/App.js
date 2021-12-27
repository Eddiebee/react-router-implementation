import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/home";
import GiveNow from "./components/giveNow";
import VisitUs from "./components/visitUs";
import About from "./components/about";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/location" component={VisitUs}></Route>
          <Route path="/give" component={GiveNow}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect to="/not-found" />
        </Switch>
      </>
    );
  }
}

export default App;
