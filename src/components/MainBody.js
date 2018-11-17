import React, { Component } from 'react';
import CardAdmin from './CardAdmin';

export default class MainBody extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="h3">Hello Admin!</h3>
        <CardAdmin/>
      </div>
    )
  }
}
