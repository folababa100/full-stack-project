import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Stream Jar | NotFound</title>
        </Helmet>
        404
      </div>
    )
  }
}
