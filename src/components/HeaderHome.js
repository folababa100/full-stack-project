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
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="shadow-sm-adjust">
        <Navbar className="nav-adjust navbar-light" light expand="md">
          <NavLink className="font-family-change nav-brand-adjust navbar-brand" to="/admin">
            <img style={{ marginBottom: "0.5rem" }} className="d-inline-block" width="35" height="35" src="/streamjar---Copy.png" alt="StreamJar Logo"></img>
            StreamJar
          </NavLink>
          <NavbarToggler type="i" className="ion-navicon-round" tag="i" onClick={this.toggle}/>
          <Collapse style={{ marginTop: '-0.1rem' }} isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">About</NavLink>
              </NavItem>
              {
                this.props.display === true ? (
                  <NavItem>
                    <NavLink className="nav-link" to="/find/users">Find Users</NavLink>
                  </NavItem>
                ) : (
                  <div>

                  </div>
                )
              }
            </Nav>
            {
              this.props.displaySearch === true ? (
                <Nav navbar>
                  <NavItem className="mbb-sm-1">
                    <form style={{ marginTop: '-0.15rem' }} className="form-inline">
                      <div className="searchbar-style">
                        <div className="search-btn">
                          <i className="i-search ion-android-search"></i>
                        </div>
                        <div>
                          <input className="searchbar borderRad-2 form-control mr-sm-2" placeholder="Search Users"/>
                        </div>
                      </div>
                    </form>
                  </NavItem>
                </Nav>
              ) : (
                <div>
                  
                </div>
              )
            }
            <Nav className="mtt-sm-1 ml-auto" navbar>
              <NavItem className="res-login" style={{ marginRight: '0.7rem' }}>
                <button className="btn-round-trans btn">
                  Login
                </button>
              </NavItem>
              <NavItem>
                <button className="btn-round-trans btn">
                  SignUp
                </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
