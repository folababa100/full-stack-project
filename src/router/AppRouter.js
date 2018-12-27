import React from 'react';

import { Router, Switch } from 'react-router-dom';
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
import PostBack from '../components/PostBack';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute component={HomePage} path="/" exact={true} />
        <PublicRoute component={HomeUsers} path="/find/users" />
        <PublicRoute component={MemberLogin} path="/login" />
        <PublicRoute component={MemberSignup} path="/signup" />
        <PublicRoute component={AboutPage} path="/about" />
        <PublicRoute component={PrivacyPolicyPage} path="/privacy/policy" />
        <PublicRoute component={Dashboard} path="/dashboard" />
        <PublicRoute component={ForgotPassword} path="/forgot/password"/>
        <PublicRoute component={ForgotPasswordForm} path="/forgot/reset"/>
        <PublicRoute component={UserProfile} path="/u/:username" />
        <PublicRoute component={AdminDashboard} exact={true} path="/admin" />
        <PublicRoute component={AdminLogin} path="/admin/login" />
        <PublicRoute component={PostBack} path="/postback"/>
        <PublicRoute component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
