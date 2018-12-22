import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProfileSection extends Component {
  render() {
    return (
      <div className="col-12">
        <div style={{ justifyContent: 'center' }} className="row">
          <div className="profile-wrapper col-12"></div>
          <div className="profile-adjust col-4">
            <div className="mb-3 img-wrapper">
              <img className="img-adjust" src="https://res.cloudinary.com/teepublic/image/private/s--iI7ihXA---/ar_1:1,c_fill,h_300,w_300/d_misc:avatars:e_4.png,f_jpg,q_90/v1476801671/production/stores/1714/avatar.jpg" alt="Profile"/>
              {
                this.props.showEdit === true ? (
                  <button className="btn-float btn">
                    <i className="ion-plus-pick ion-edit"></i>
                  </button>
                ) : (
                  <div></div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProfileSection.propTypes = {
  showEdit: PropTypes.bool.isRequired
}
