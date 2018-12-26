import React, { Component } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';

export default class CardItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      email: props.user ? props.user.email : '',
      username: props.user ? props.user.username : '',
      password: props.user ? props.user.password : '',
      number: props.user ? props.user.number : '',
      refPercentage: props.user ? props.user.refPercentage : '',
      totalEarned: props.user ? props.user.totalEarned : '',
      payPecentage: props.user ? props.user.payPecentage : '',
      banned: props.user ? props.user.banned : '',
      description: props.user ? props.user.description : '',
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
            <ModalHeader toggle={this.toggle}>
              User Edit
            </ModalHeader>
            <div className="mt-3 container">
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input value={this.state.email} className="form-control" type="email" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input value={this.state.password} className="form-control" type="password" placeholder="Password"/>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input value={this.state.number} placeholder="Total Earned" className="form-control" type="number"/>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option defaultValue>Referral Percentage</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option defaultValue>Pay Percentage</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option defaultValue>Banned status</option>
                        <option value="true">True</option>
                        <option value="true">False</option>
                      </select>
                    </div>
                  </div>
                  <p className="p-hor">
                    <span className="span-hor">Profile Details</span>
                  </p>
                  <div className="col-12">
                    <div className="form-group">
                      <label style={{ marginBottom: '0rem', backgroundColor: '#4dd0e1' }} className="btn btn-submit" htmtFor="file-admin">
                        Change picture
                        <input style={{ display: 'none' }} id="file-admin" className="form-control-file" type="file" name="file" accept="image/*" />
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea value={this.state.description} placeholder="User description" rows="5" className="form-control"></textarea>
                    </div>
                  </div>
                  <p className="p-hor">
                    <span className="span-hor">Payment Options</span>
                  </p>
                  <div className="col-12">
                    <div className="form-group">
                      <input placeholder="Payment Full Name" type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option defaultValue="Set Payment Option">Set Payment Option</option>
                        <option value="None">None</option>
                        <option value="Paypal">Paypal</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input placeholder="Payment Email Address" type="email" className="form-control"/>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button className="btn btn-submit">Submit</button>
                  <button className="btn btn-submit">Reset Payment</button>
                </div>
              </form>
            </div>
          </Modal>
        </th>
        <td>1001</td>
        <td>Otto</td>
        <td>otto@gmail.com</td>
        <td>@mdo</td>
        <td>
          <button className="btn-round btn">Pay Button</button>
        </td>
      </tr>
    )
  }
}

CardItem.propTypes = {
  className: PropTypes.string
}
