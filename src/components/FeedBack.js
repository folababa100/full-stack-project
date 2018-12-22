import React, { Component } from 'react';

export default class FeedBack extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#ffffff1a' }} className="card">
        <div className="card-header-adjust ddd card-header">
          Leave a feedback here
        </div>
        <div className="card-body">
          <form className="form-adjust">
            <div className="form-group">
              <input placeholder="Email" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <input placeholder="Title" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <textarea placeholder="Description" cols="30" rows="8" className="form-control"></textarea>
            </div>
            <button className="btn-round-trans btn">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
