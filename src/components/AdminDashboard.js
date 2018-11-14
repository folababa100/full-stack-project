import React, { Component } from 'react';
import SidebarAdmin from './SidebarAdmin';
import HeaderAdmin from './HeaderAdmin';
import MainBody from './MainBody';

export default class AdminDashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <SidebarAdmin/>
        <div className="main">
          <HeaderAdmin/>
          <MainBody/>
        </div>
      </div>
    )
  }
}
