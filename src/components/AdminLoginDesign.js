import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

export default class AdminLoginDesign extends Component {
  onSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div className="box-layout">
        <Helmet>
          <title>StreamJar | Admin login</title>
        </Helmet>
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-md-6 col-sm-6 col-lg-4 col-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this)} style={{ textAlign: 'center' }}>
                    <h3 className="header-form">Admin Login</h3>
                    <div className="form-group">
                      <input 
                        autoFocus={true} 
                        className="form-control" 
                        placeholder="Email"
                        ref="email"
                        type="email" 
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        placeholder="Password" 
                        ref="password"
                        type="password"
                        autoComplete="password" 
                        required
                      />
                    </div>
                    <button className="btn btn-block btn-submit">Submit</button>
                    <Link className="a-adjust" to="/forgot">Forgot your password?</Link>
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
