import React, { Component } from 'react'

export default class Photo extends Component {
  render() {
    const { photo, isInViewport } = this.props
    return (
      <div>
        <img src={photo.urls.small} alt={photo.description} />
        <br />
      </div>
    )
  }
} 