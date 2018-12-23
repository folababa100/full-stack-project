import React, { Component } from 'react';

export default class ProfileUsers extends Component {
  render() {
    return (
      <div className="mb-3 container">
        <h3 style={{ width: '100%', fontWeight: '400' }} className="font-family-change text-center">Austin Ross</h3>
        <div className="row mt-3">
          <div className="col-md-6 col-12">
            <div className="mb-3 card">
              <h5 className="details mt-3">Your Details</h5>
              <hr className="hr"/>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card">
              <h5 className="details mt-3">Donate to this streamer</h5>
              <hr className="hr"/>
              <div className="card-body">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
