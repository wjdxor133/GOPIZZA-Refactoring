import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "pages/Main/Main";
import Map from "pages/Map/Map";
import Menu from "pages/Menu/Menu";
import Cart from "pages/Cart/Cart";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/map" component={Map} />
        <Route path="/menu" component={Menu} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routes;
