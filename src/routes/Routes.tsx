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
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={MainPage} />
        <Route path={process.env.PUBLIC_URL + "/login"} component={LoginPage} />
        <Route
          path={process.env.PUBLIC_URL + "/signUp"}
          component={SignUpPage}
        />
        <Route path={process.env.PUBLIC_URL + "/map"} component={MapPage} />
        <Route path={process.env.PUBLIC_URL + "/menu"} component={MenuPage} />
        <Route path={process.env.PUBLIC_URL + "/cart"} component={CartPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
