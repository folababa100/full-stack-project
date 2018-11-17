import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import Header from './Header';
import MainBodyUser from './MainBodyUser';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Stream Jar | Dashboard</title>
        </Helmet>
        <div className="main">
          <Header/>
          <MainBodyUser/>
        </div>
      </div>
    )
  }
}
