import React, { Component } from 'react';
import CardAdmin from './CardAdmin';

export default class MainBody extends Component {
  render() {
    return (
      <div className="container-wrapper">
        <div className="container">
          <h3 className="font-family-change h3">Hello Admin!</h3>
          <CardAdmin/>
        </div>
      </div>
    )
  }
}
