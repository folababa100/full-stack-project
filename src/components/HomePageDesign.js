import React, { Component } from 'react';
import HeaderHome from './HeaderHome';
import StreamJarDes from './StreamJarDes';

export default class HomePageDesign extends Component {
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
      <div>
        <HeaderHome display={true} displaySearch={false} />
        <div className="box-layout-home">
          <div className="box-home">
            <div className="row">
              <div className="col-md-12 col-12">
                <StreamJarDes/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
