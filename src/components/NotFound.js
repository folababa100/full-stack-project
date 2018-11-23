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
          <h1 className="not-found">404</h1>
          <hr/>
          <Link className="not-found-home" to="/">Return home</Link>
        </div>
      </div>
    )
  }
}
