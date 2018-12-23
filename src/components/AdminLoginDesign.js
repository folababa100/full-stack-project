import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

export default class AdminLoginDesign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  toggleShow() {
    this.state.show === false ? this.setState({ show: true }) : this.setState({ show: false })
  }
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
                  <form onSubmit={this.onSubmit.bind(this)}>
                    <h3 className="header-form">Admin Login</h3>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        id="email"
                        autoFocus={true} 
                        className="form-control" 
                        placeholder="Email"
                        ref="email"
                        type="email" 
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwor">Password</label>
                      {
                        this.state.show === true ? (
                          <input
                            id="passwor"
                            style={{ paddingRight: '2rem' }} 
                            className="form-control pass" 
                            placeholder="Password" 
                            type="text" 
                            ref="password" 
                            autoComplete="password" 
                            required 
                          />
                        ) : (
                          <input
                            id="passwor"
                            style={{ paddingRight: '2rem' }} 
                            className="form-control pass" 
                            placeholder="Password" 
                            type="password" 
                            ref="password" 
                            autoComplete="password" 
                            required 
                          />
                        )
                      }
                    </div>
                    <div className="password">
                      {
                        this.state.show === true ? (
                          <i onClick={() => this.toggleShow()} className="x15 ion-eye-disabled"></i>
                        ) : (
                          <i onClick={() => this.toggleShow()} className="x15 ion-eye"></i>
                        )
                      }
                    </div>
                    <button className="btn btn-block btn-submit">Submit</button>
                    <div style={{ textAlign: 'center', width: '100%' }}>
                      <Link className="a-adjust" to="/forgot">Forgot your password?</Link>
                    </div>
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
