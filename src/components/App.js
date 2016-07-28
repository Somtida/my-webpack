import React, { Component } from 'react'
import Welcome from './Welcome'
import Navbar from './Navbar'

export default class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <Welcome />
      </div>
    )
  }
}
