import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem, } from 'reactstrap';

export default class HeaderAdmin extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  onInputSearch() {
    document.getElementById('search').style.display === 'block' ? document.getElementById('search').style.display = 'none' : document.getElementById('search').style.display = 'block'
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  reloadCurrent() {
    window.location.reload(true)
  }
  render() {
    return (
      <div>
        <Navbar className="nav-adjust navbar-light" light expand="md">
          <NavLink className="font-family-change nav-brand-adjust navbar-brand" to="/admin">
            <img style={{ marginBottom: "0.5rem" }} className="d-inline-block align-top" width="50" height="50" src="/streamjar-round.png" alt="StreamJar Logo"></img>
            StreamJar
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">About</NavLink>
              </NavItem>
              <NavItem className="nav-item-adjust">
                <i onClick={() => this.onInputSearch()} className="ion-android-search-icon ion-android-search"></i>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <form className="form-inline">
                  <input id="search" className="borderRad-2 form-control mr-sm-2" placeholder="Search Users"/>
                </form>
              </NavItem>
              <NavItem>
                <button onClick={() => this.reloadCurrent()} className="btn btn-round">
                  <i style={{ marginRight: '0.4rem' }} className="ion-refresh-adjust ion-refresh"></i>
                  Reload
                </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
