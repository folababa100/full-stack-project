import React, { Component } from 'react';

export default class UserCard extends Component {
  render() {
    return (
      <div className="mt-3 col-md-4 col-6">
        <div className="card">
          <div className="card-image card-body">
            <img className="img-width img-fluid" src="https://res.cloudinary.com/teepublic/image/private/s--iI7ihXA---/ar_1:1,c_fill,h_300,w_300/d_misc:avatars:e_4.png,f_jpg,q_90/v1476801671/production/stores/1714/avatar.jpg" alt="Profile"/>
            <div className="card-footer">
              <h5>Username</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
