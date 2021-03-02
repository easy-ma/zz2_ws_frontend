import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import HomePage from "../pages/homePage";

import SignInPage from "../pages/signInPage";
import RegisterPage from "../pages/registerPage";
import TermsPage from "../pages/termsPage";
import ProfilePage from "../pages/profilePage";
import NotFoundPage from "../pages/404";
import AddPage from "../pages/addPage";
import { useAuth } from "./auth";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/register", component: RegisterPage },
  { path: "/sign-in", component: SignInPage },
  { path: "/profile", component: ProfilePage, auth: true },
  { path: "/terms-of-services", component: TermsPage },
  { path: "/ads/add", component: AddPage },
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

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const RouteWithSubRoutes = (route) => {
  let { path, exact = true, auth } = route;
  return auth ? (
    <PrivateRoute
      exact={exact}
      path={path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  ) : (
    <Route
      exact={exact}
      path={path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default Routing;
