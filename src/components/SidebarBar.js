import React, { Component } from 'react'

export default class SidebarBar extends Component {
  render() {
    return (
      <div className="sidebar_bar">
        <i className="ion-admin ion-home"></i>
        <h3 className="sidebar_h3">{this.props.title}</h3>
      </div>
    )
  }
}
