import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownFalse: false
    };
  }
  onInputSearch() {
    document.getElementById('search').style.display === 'block' ? document.getElementById('search').style.display = 'none' : document.getElementById('search').style.display = 'block'
  }
  toggle() {
    this.setState(prevState => ({
      dropdownFalse: !prevState.dropdownFalse
    }))
  }
  render() {
    return (
      <div>
        <Navbar className="nav-adjust navbar-light" light expand="md">
          <NavLink className="nav-brand-adjust navbar-brand" to="/admin">
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
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Dropdown isOpen={this.state.dropdownFalse} toggle={this.toggle}>
                  <DropdownToggle className="img-header-wrapper" tag="div">
                    <img className="img-header-img" src="https://res.cloudinary.com/teepublic/image/private/s--iI7ihXA---/ar_1:1,c_fill,h_300,w_300/d_misc:avatars:e_4.png,f_jpg,q_90/v1476801671/production/stores/1714/avatar.jpg" alt="Profile"/>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem header>My Profile</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
