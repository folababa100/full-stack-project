import React, { Component } from 'react';
import ProfileSection from './ProfileSection';
import ProfileDetails from './ProfileDetails';

export default class MainBodyUser extends Component {
  render() {
    return (
      <div>
        <div className="mt-4 container">
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
