import React, { Component } from 'react';

export default class ProfileSection extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body-adjust card-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="profile-content flex">
                  <h3 title="AccountID" style={{ display: 'flex', justifyContent: 'center' }} className="username-adjust font-family-change">AccountID: <h3 style={{ marginLeft: '0.4rem' }} className="username font-family-change">1001</h3></h3>
                  <h3 style={{ display: 'flex', justifyContent: 'center' }} className="username-adjust font-family-change">Username: <h3 style={{ marginLeft: '0.4rem' }} className="username font-family-change">Jonathan</h3></h3>
                </div>
                <hr/>
                <div className="mb-4 img-wrapper">
                  <img className="img-adjust" src="https://res.cloudinary.com/teepublic/image/private/s--iI7ihXA---/ar_1:1,c_fill,h_300,w_300/d_misc:avatars:e_4.png,f_jpg,q_90/v1476801671/production/stores/1714/avatar.jpg" alt="Profile"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}