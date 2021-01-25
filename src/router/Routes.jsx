import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Users from "../pages/Users";
import CounterPage from "../pages/Counter";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/counter" exact component={CounterPage}></Route>
      <Route path="/users" exact component={Users}></Route>
    </Switch>
  );
};

export default Routes;
