import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>StreamJar | NotFound</title>
        </Helmet>
        <div style={{ textAlign: "center" }} className="main-sidebar">
          <div className="container">
            <div style={{ flexDirection: 'column' }} className="row">
              <h1 className="not-found">404</h1>
              <h5>Page not found</h5>
              <div className="col-12">
                <Link to="/">
                  <button className="btn-res btn-round btn">Return home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
