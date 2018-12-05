import React, { Component } from 'react';
import ProfileSection from './ProfileSection';
import ProfileDetails from './ProfileDetails';
import ProfileAmount from './ProfileAmount';
import ProfileRefs from './ProfileRefs';

export default class MainBodyUser extends Component {
  render() {
    return (
      <div className="container-wrapperr">
        <ProfileSection showEdit={true}/>
        <h3 className="username">Welcome to your dashboard</h3>
        <div className="mt-3 container">
          <div className="row">
            <div className="col-md-4 col-12">
              <ProfileAmount/>
            </div>
            <div className="col-md-4 col-12">
              <ProfileDetails/>
            </div>
            <div className="col-md-4 col-12">
              <ProfileRefs/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
