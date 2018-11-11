import React, { Component } from 'react'

export default class AdminLogin extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <input type="password"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
