import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

export default class ForgotPasswordDesign extends Component {
  onSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>StreamJar | Forgot</title>
        </Helmet>
        <div className="box-layout">
          <div className="container">
            <div style={{ justifyContent: 'center' }} className="row">
              <div className="col-md-6 col-sm-6 col-lg-4 col-12">
                <div className="card">
                  <div className="card-body">
                    <h3 style={{ textAlign: 'center' }} className="font-family-change forgot-pass">Forgot your password?</h3>
                    <hr/>
                    <p className="forgot-pass mt-4">Can't remember your password? Just sit back, changing your password is very easy.</p>
                    <form onSubmit={this.onSubmit.bind(this)}>
                      <div className="form-group">
                        <input 
                          autoFocus={true} 
                          placeholder="Email Adresss" 
                          className="form-control"
                          ref="email" 
                          type="email" 
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
