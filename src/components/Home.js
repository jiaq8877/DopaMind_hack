import React from "react";
import Navigation from "./Navigation";
import About from "./About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const home = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default home;
