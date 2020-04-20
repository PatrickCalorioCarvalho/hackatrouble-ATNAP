import React from "react";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";

import Advertiser from "./pages/Advertiser";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Advertisement from "./pages/Advertisement";

import Login from "./pages/Login";

import { isAuthenticated,logout } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <PrivateRoute path="/anunciante" component={Advertiser} />
      <PrivateRoute path="/usuario" component={Register} />
      <PrivateRoute path="/anuncios" component={Advertisement} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={logout()} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;