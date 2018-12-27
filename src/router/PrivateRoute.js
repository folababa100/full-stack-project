import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
      localStorage.getItem('authData') ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
  )}/>
)

export default PrivateRoute;
