import React, { Component } from 'react';
import { Modal, ModalHeader } from 'reactstrap';

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
            <ModalHeader>
              User Edit
            </ModalHeader>
            <div className="mt-3 container">
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input className="form-control" type="email" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input className="form-control" type="password" placeholder="Password"/>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input placeholder="Total Earned" className="form-control" type="number"/>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option selected>Referral Percentage</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option selected>Pay Percentage</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option selected>Banned status</option>
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
                      <textarea placeholder="User description" rows="7" className="form-control"></textarea>
                    </div>
                  </div>
                  <hr/>
                  
                </div>
                <button className="btn btn-submit">Submit</button>
              </form>
            </div>
          </Modal>
        </th>
        <td>1001</td>
        <td>Otto</td>
        <td>otto@gmail.com</td>
        <td>@mdo</td>
        <td>
          <button className="btn btn-round">Pay Button</button>
        </td>
      </tr>
    )
  }
}
