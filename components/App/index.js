import React, { Component } from 'react'
import PhotoListContainer from '../../containers/PhotoListContainer'
import './index.less'

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <PhotoListContainer/>
      </div>
    )
  }
}