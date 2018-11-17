import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AdminLogin from '../components/AdminLogin';
import Home from '../components/Home';
import MemberLogin from '../components/MemberLogin';
import MemberSignup from '../components/MemberSignup';
import NotFound from '../components/NotFound';
import AdminDashboard from '../components/AdminDashboard';
import Dashboard from '../components/Dashboard';
import UserProfile from '../components/UserProfile';
import ForgotPassword from '../components/ForgotPassword';
import AdminUserEdit from '../components/AdminUserEdit';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={MemberLogin} path="/login" />
        <Route component={MemberSignup} path="/signup" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={ForgotPassword} path="/forgot"/>
        <Route component={UserProfile} path="/u/:username" />
        <Route component={AdminDashboard} exact={true} path="/admin" />
        <Route component={AdminLogin} path="/admin/login" />
        <Route component={AdminUserEdit} path="/admin/user/edit/:id"/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
