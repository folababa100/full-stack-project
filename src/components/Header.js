import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="shadow-sm-adjust">
        <Navbar className="nav-adjust navbar-light" light expand="md">
          <NavLink className="font-family-change nav-brand-adjust navbar-brand" to="/">
            <img style={{ marginBottom: "0.5rem" }} className="d-inline-block" width="35" height="35" src="/streamjar---Copy.png" alt="StreamJar Logo"></img>
            StreamJar
          </NavLink>
          <NavbarToggler type="i" className="ion-navicon-round" tag="i" onClick={this.toggle}/>
          <Collapse style={{ marginTop: '-0.1rem' }} isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink exact={true} activeClassName="is-active" className="nav-link" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="is-active" className="nav-link" to="/about">About</NavLink>
              </NavItem>
            </Nav>
            <Nav className="mtt-sm-1 ml-auto" navbar>
              <NavItem>
                <button className="btn-round-trans btn">
                  Logout
                </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
