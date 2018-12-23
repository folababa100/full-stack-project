import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (

    localStorage.getItem("authData") ? (
        <Redirect to="/dashboard"/>
      ) : (
        <div>
          <Component {...props} />
        </div>
      )

  )} />
)

export default PublicRoute;
