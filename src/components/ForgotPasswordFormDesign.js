import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class ForgotPasswordFormDesign extends Component {
  onSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>StreamJar | Reset-password</title>
        </Helmet>
        <div className="box-layout">
          <div className="container">
            <div style={{ justifyContent: 'center' }} className="row">
              <div className="col-md-6 col-sm-6 col-lg-4 col-12">
                <div className="card">
                  <div className="card-body">
                    <h3 style={{ textAlign: 'center' }} className="font-family-change forgot-pass">Forgot your password?</h3>
                    <hr />
                    <p className="forgot-pass mt-4">Your password should be a minimum of 8 characters mixed with letters, number and symbol Included.</p>
                    <form onSubmit={this.onSubmit.bind(this)}>
                      <div className="form-group">
                        <input 
                          autoFocus={true} 
                          placeholder="Current Password" 
                          className="form-control" 
                          type="password" 
                          ref="currentPassword"
                          autoComplete="password" 
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input 
                          placeholder="New Password" 
                          className="form-control" 
                          type="password"
                          ref="newPassword"
                          autoComplete="password" 
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input 
                          placeholder="Confirm Password" 
                          className="form-control" 
                          type="password"
                          ref="confirmPassword"
                          autoComplete="password" 
                          required
                        />
                      </div>
                      <button className="btn btn-submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
