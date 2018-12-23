import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AdminLogin from '../components/AdminLogin';
import HomeUsers from '../components/HomeUsers';
import MemberLogin from '../components/MemberLogin';
import MemberSignup from '../components/MemberSignup';
import NotFound from '../components/NotFound';
import AdminDashboard from '../components/AdminDashboard';
import Dashboard from '../components/Dashboard';
import UserProfile from '../components/UserProfile';
import ForgotPassword from '../components/ForgotPassword';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import PrivacyPolicyPage from '../components/PrivacyPolicyPage';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route component={HomePage} path="/" exact={true} />
        <Route component={HomeUsers} path="/find/users" />
        <Route component={MemberLogin} path="/login" />
        <Route component={MemberSignup} path="/signup" />
        <Route component={AboutPage} path="/about" />
        <Route component={PrivacyPolicyPage} path="/privacy/policy" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={ForgotPassword} path="/forgot/password"/>
        <Route component={ForgotPasswordForm} path="/forgot/reset"/>
        <Route component={UserProfile} path="/u/username" />
        <Route component={AdminDashboard} exact={true} path="/admin" />
        <Route component={AdminLogin} path="/admin/login" />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
