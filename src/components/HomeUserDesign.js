import React, { Component } from 'react';
import HeaderHome from './HeaderHome';
import BodyHome from './BodyHome'

export default class HomeDesign extends Component {
  render() {
    return (
      <div>
        <HeaderHome display={false} displaySearch={true}/>
        <div className="main">
          <BodyHome/>
        </div>
      </div>
    )
  }
}
