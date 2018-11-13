import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AdminLogin from '../components/AdminLogin';
import Home from '../components/Home'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={AdminLogin} path="/admin/login" />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
