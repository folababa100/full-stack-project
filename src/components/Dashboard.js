import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import Header from './Header';
import MainBodyUser from './MainBodyUser';
import SidebarAdmin from './SidebarAdmin';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>StreamJar | Dashboard</title>
        </Helmet>
        <Header history={this.props.history}/>
        <div style={{ flexDirection: 'column' }} className="main">
          <SidebarAdmin/>
          <MainBodyUser/>
        </div>
      </div>
    )
  }
}
