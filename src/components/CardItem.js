import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CardItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  render() {
    return (
      <tr>
        <th scope="row">
          <button onClick={this.toggle} className="btn btn-edit-round">
            <i style={{ fontSize: '1.2rem', marginLeft: '-0.15rem' }} className="ion-ios-gear"></i>
          </button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
            <ModalFooter>
              <h1>Hello</h1>
            </ModalFooter>
          </Modal>
        </th>
        <td>1001</td>
        <td>Otto</td>
        <td>otto@gmail.com</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
    )
  }
}
