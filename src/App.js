import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Details from "./Details";
import SearchRelation from "./SearchRelation";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          /<Route path="/Details" component={Details} />
          <Route path="/SearchRelation" component={SearchRelation} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
