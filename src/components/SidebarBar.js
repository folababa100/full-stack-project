import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class SidebarBar extends Component {
  render() {
    return (
      <div className="sidebar_bar">
        <i className="ion-admin ion-ios-home"></i>
        <h3 className="sidebar_h3">{this.props.title}</h3>
      </div>
    )
  }
}

SidebarBar.propTypes = {
  title: PropTypes.string.isRequired
}
