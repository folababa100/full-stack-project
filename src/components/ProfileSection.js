import React, { Component } from 'react';

export default class ProfileSection extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <img src="/profile-pics.png" alt="Profile"/>
        </div>
      </div>
    )
  }
}