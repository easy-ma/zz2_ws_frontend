import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/homePage";

import SignInPage from "../pages/signInPage";
import RegisterPage from "../pages/registerPage";
import TermsPage from "../pages/termsPage";
import NotFoundPage from "../pages/404";
import AddPage from "../pages/addPage"

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/register", component: RegisterPage },
  { path: "/sign-in", component: SignInPage },
  { path: "/terms-of-services", component: TermsPage },
  {path: "/ads/add",component: AddPage},
  { path: "*", component: NotFoundPage },
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
    let { path, exact = true } = route;
    console.log(exact,path);
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default Routing;
