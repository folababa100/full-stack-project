import React, { Component } from 'react';
import HeaderAdmin from './HeaderAdmin';
import MainBody from './MainBody';
import { Helmet } from "react-helmet";

export default class AdminDashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Helmet>
          <title>Stream Jar | Admin dashboard</title>
        </Helmet>
        <div className="main">
          <HeaderAdmin/>
          <MainBody/>
        </div>
      </div>
    )
  }
}
