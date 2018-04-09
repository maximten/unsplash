import React, { Component } from 'react'
import { photoWidth } from '../constants'

export default class Photo extends Component {
  render() {
    const { photo, isInViewport } = this.props
    const width = photoWidth
    const height = photo.height / photo.width * width
    const style = {
      width: width,
      height: height,
      background: photo.color
    }
    return (
      <div className="photo-container" style={ style }>
        <img src={photo.urls.small} alt={photo.description} />
        <br />
      </div>
    )
  }
} 