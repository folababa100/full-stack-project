import React, { Component } from 'react';
import HeaderAdmin from './HeaderAdmin';
import MainBody from './MainBody';
import SidebarAdmin from './SidebarAdmin';
import { Helmet } from "react-helmet";

export default class AdminDashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Helmet>
          <title>StreamJar | Admin dashboard</title>
        </Helmet>
        <HeaderAdmin/>
        <div className="main">
          <SidebarAdmin/>
          <MainBody/>
          <button className="btn btn-float-bg">
            <i className="ion-arrow-up-b"></i>
          </button>
        </div>
      </div>
    )
  }
}
