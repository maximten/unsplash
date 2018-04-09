import React, { Component } from 'react'
import { photoWidth } from '../constants'
import './index.less'

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
      <div className="photo-container">
        <div style={ style }>
          <img src={photo.urls.small} alt={photo.description} />
        </div>
      </div>
    )
  }
} 