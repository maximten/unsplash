import React, { Component } from 'react'
import { Watch } from 'scrollmonitor-react'

class ScrollWatcher extends Component {
  render () {
    const { isInViewport, callback } = this.props
    if (isInViewport) {
      callback()
    }
    return <div className="scroll-watcher"></div>
  }
}

export default Watch(ScrollWatcher)