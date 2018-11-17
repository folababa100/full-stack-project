import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

export default class AdminLogin extends Component {
  render() {
    return (
      <div className="box-layout">
        <Helmet>
          <title>Stream Jar | Admin login</title>
        </Helmet>
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-md-6 col-sm-6 col-lg-4 col-12">
              <div className="card" style={{ height: "26rem" }}>
                <div className="card-body">
                  <form className="mt-6" style={{ textAlign: 'center' }}>
                    <h3 className="header-form">Admin Login</h3>
                    <div className="form-group">
                      <input className="form-control" placeholder="Email" type="text" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Username" type="text" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Password" type="password"/>
                    </div>
                    <button className="btn btn-block btn-submit">Submit</button>
                    <Link to="/forgot">Forgot your password?</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
