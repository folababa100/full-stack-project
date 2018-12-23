import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GoogleLogin from 'react-google-login';

export default class MemberSignupDesign extends Component {
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
    const responseGoogle = (response) => {
      console.log(response);
    }
    const responseGoogleSuccess = (response) => {
      console.log(response.profileObj)
      window.localStorage.setItem('authData', JSON.stringify(response))
      const res = JSON.parse(window.localStorage.getItem('authData'), null, 2)
      console.log(res.profileObj)
      this.props.history.push('/dashboard')
    }
    return (
      <div className="box-layout">
        <Helmet>
          <title>StreamJar | Signup</title>
        </Helmet>
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-md-6 col-sm-6 col-lg-4 col-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="light-weight text-center">StreamJar Signup</h3>
                  <button className="twitch-color color btn-block btn">
                    <i className="color x4 ion-social-twitch-outline"></i>
                    Login with Twitch
                  </button>
                  <hr/>
                  <GoogleLogin
                    clientId="941753139994-96qalhvtvob3uq6es9m5p13u4abnlpjm.apps.googleusercontent.com"
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogle}
                    buttonText="Login with Youtube"
                    render={renderProps => (
                      <button className="youtube-color color btn-block btn" onClick={renderProps.onClick}>
                        <i className="color x4 ion-social-youtube"></i>
                        Login with Youtube
                      </button>
                    )}
                  />
                  <div>
                    <hr/>
                    <p className="light-weight text-center">Or</p>
                    <hr/>
                  </div>
                  <form onSubmit={this.onSubmit.bind(this)} style={{ textAlign: 'center' }}>
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        placeholder="Email Adresss" 
                        type="email"
                        ref="email"
                        required 
                        autoFocus={true}
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        placeholder="Username" 
                        ref="username"
                        type="text" 
                        required
                      />
                    </div>
                    <div className="form-group">
                      {
                        this.state.show === true ? (
                          <input 
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
                    <button className="btn btn-block btn-submit">Signup</button>
                    <Link className="a-adjust" to="/login">Already have an account with us?</Link>
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
