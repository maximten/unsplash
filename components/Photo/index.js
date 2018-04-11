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
      backgroundImage: `url(${photo.urls.small})`,
      backgroundColor: photo.color,
    }
    return (
      <div className="photo-container" style={{
        backgroundColor: photo.color,
      }}>
        <a href="#" className="photo" style={{
          width: width,
          height: height,
          backgroundImage: `url(${photo.urls.small})`,
        }}>
        </a>
      </div>
    )
  }
} 