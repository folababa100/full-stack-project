import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProfileSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: JSON.parse(window.localStorage.getItem('authData'), null, 2)
    }
  }
  render() {
    return (
      <div className="col-12">
        <div style={{ justifyContent: 'center' }} className="row">
          <div className="profile-wrapper col-12"></div>
          <div className="profile-adjust col-4">
            <div className="mb-3 img-wrapper">
              <img className="img-adjust" src='http://www.nikseminar.com/wp-content/uploads/2015/04/anonymous-user.png' alt="Profile"/>
              {
                this.props.showEdit === true ? (
                  <label htmlFor="file" className="btn-float btn">
                    <input style={{ display: 'none' }} id="file" type="file" accept="image/*" name="file" />
                    <i className="ion-plus-pick ion-edit"></i>
                  </label>
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
