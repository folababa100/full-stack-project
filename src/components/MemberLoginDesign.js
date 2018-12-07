import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

export default class MemberLoginDesign extends Component {
  onSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div className="box-layout">
        <Helmet>
          <title>StreamJar | Login</title>
        </Helmet>
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-md-6 col-sm-6 col-lg-4 col-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="light-weight text-center">StreamJar Login</h3>
                  <button className="twitch-color color btn-block btn">
                    <i className="color x4 ion-social-twitch-outline"></i>
                    Login with Twitch
                  </button>
                  <hr/>
                  <button className="youtube-color color btn-block btn">
                    <i className="color x4 ion-social-youtube"></i>
                    Login with Youtube
                  </button>
                  <div>
                    <hr/>
                    <p className="light-weight text-center">Or</p>
                    <hr/>
                  </div>
                  <form onSubmit={this.onSubmit.bind(this)} style={{ textAlign: 'center' }}>
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        placeholder="Email Address" 
                        type="email" 
                        required 
                        autoFocus={true}
                        ref="email"
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        placeholder="Password" 
                        type="password" 
                        ref="password"
                        autoComplete="password" 
                        required
                      />
                    </div>
                    <button className="btn btn-block btn-submit">Login</button>
                    <Link className="a-adjust" to="/forgot/password">Forgot your password?</Link>
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
