import React, { Component } from 'react'

export default class ProfileDetails extends Component {
  render() {
    return (
      <div className="mb-3 card">
        <h5 className="details mt-3">Your Details</h5>
        <hr className="hr"/>
        <div className="card-body">
          <div className="user-details">
            <div>
              <p className="user-details-text">AccountId:</p>
              <p className="user-details-text">Username:</p>
            </div>
            <div style={{ marginLeft: '1rem' }}>
              <p className="user-details-text-weight">1001</p>
              <p className="user-details-text-weight">FriendlyWebGuy</p>
            </div>
          </div>
          <form className="mt-2">
            <div className="form-group">
              <textarea placeholder="Edit your description" cols="30" rows="10" className="form-control box-shadow"></textarea>
            </div>
            <button style={{ marginBottom: '0' }} className="btn-submit btn">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
