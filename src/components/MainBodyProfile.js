import React, { Component } from 'react';
import ProfileSection from './ProfileSection';
import ProfileUsers from './ProfileUsers';

export default class MainBodyProfile extends Component {
  render() {
    return (
      <div style={{ width: '100vw' }}>
        <ProfileSection showEdit={false}/>
        <ProfileUsers/>
      </div>
    )
  }
}
