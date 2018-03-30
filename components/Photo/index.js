import React, { Component } from 'react'
import { Watch } from 'scrollmonitor-react'

class Photo extends Component {
  render() {
    const { photo, isInViewport, isLast } = this.props
    return (
      <div>
        <p>{photo.description}</p>
        <img src={photo.urls.small} alt={photo.description} />
        <br />
      </div>
    )
  }
} 

export default Watch(Photo)