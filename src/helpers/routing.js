import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import RegisterPage from "../pages/registerPage";
import SignInPage from "../pages/signInPage";

const routes = [
  //   { path: "/", component: HomePage },
  { path: "/register", component: RegisterPage },
  { path: "/sign-in", component: SignInPage },
];

const Routing = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default Routing;
