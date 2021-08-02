import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import MapPage from "pages/MapPage";
import MenuPage from "pages/MenuPage";
import CartPage from "pages/CartPage";

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login`" component={LoginPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
