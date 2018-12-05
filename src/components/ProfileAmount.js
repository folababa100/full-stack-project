import React, { Component } from 'react'

export default class ProfileAmount extends Component {
  render() {
    return (
      <div className="mb-3 card">
        <h5 className="details mt-3">Your Stats</h5>
        <hr className="hr"/>
        <div className="card-body">
          <div className="user-details">
            <div>
              <p className="user-details-text">Total amount earned:</p>
              <p className="user-details-text">Total amount unpaid:</p>
              <p className="user-details-text">Number of referals:</p>
              <p className="user-details-text">Referals Earning:</p>
            </div>
            <div style={{ marginLeft: '1rem' }}>
              <p className="user-details-text-weight">$200</p>
              <p className="user-details-text-weight">$400</p>
              <p className="user-details-text-weight">50</p>
              <p className="user-details-text-weight">$60</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
