import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Header from './Header';
import MainBodyProfile from './MainBodyProfile';

export default class UserProfile extends Component {
  render() {
    return (
      <div>
          <Helmet>
            <title>StreamJar | Profile</title>
          </Helmet>
        <div className="main-sidebar">
          <Header/>
          <MainBodyProfile/>
        </div>
      </div>
    )
  }
}
