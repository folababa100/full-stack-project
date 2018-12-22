import React, { Component } from 'react';
import CardItem from './CardItem';

export default class CardAdmin extends Component {
  render() {
    return (
      <div className="mb-5 mt-3 card">
        <div style={{ minHeight: "83vh" }} className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-8 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="total-unpaid">Total Unpaid Balance: <span className="font-family-change" style={{ fontWeight: '600' }}>$20,000</span></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th className="font-family-change" scope="col">Edit</th>
                        <th className="font-family-change" scope="col">AccountID</th>
                        <th className="font-family-change" scope="col">Username</th>
                        <th className="font-family-change" scope="col">Paypal Email</th>
                        <th className="font-family-change" scope="col">Amount Unpaid</th>
                        <th className="font-family-change" scope="col">Pay</th>
                      </tr>
                    </thead>
                    <tbody>
                      <CardItem/>
                      <CardItem/>
                      <CardItem/>
                      <CardItem/>
                      <CardItem/>
                      <CardItem/>
                      <CardItem/>
                      <CardItem/>
                      <CardItem/>
                      <CardItem/>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
