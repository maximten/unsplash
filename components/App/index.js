import React, { Component } from 'react'
import PhotoListContainer from '../../containers/PhotoListContainer'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello</h1>
        <PhotoListContainer/>
      </div>
    )
  }
}