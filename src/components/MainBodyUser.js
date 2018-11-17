import React, { Component } from 'react';
import ProfileSection from './ProfileSection';

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
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
