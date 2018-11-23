import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import ProfileSection from './ProfileSection';
import ProfileDetails from './ProfileDetails';
import Header from './Header';

export default class UserProfile extends Component {
  render() {
    return (
      <div className="main-profile">
        <Helmet>
          <title>StreamJar | Profile</title>
        </Helmet>
        <Header/>
        <div className="mt-3 container">
          <div className="row">
            <div className="col-4">
              <ProfileSection/>
            </div>
            <div className="col-8">
              <ProfileDetails/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
