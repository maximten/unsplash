import React, { Component } from 'react'
import { Observable } from 'rxjs'
import PhotoListContainer from '../../containers/PhotoListContainer'
import { bgColors, scrollInterval } from '../constants'
import './index.less'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: bgColors[0]
    }
  }
  pickColor = (interval, colors, offset) => {
    const colorIndex = offset % interval / interval * colors.length
    const startIndex = Math.floor(colorIndex)
    const endIndex = Math.ceil(colorIndex)
    const transitionProgress = colorIndex % 1
    const startColor = colors[startIndex % colors.length]
    const endColor = colors[endIndex % colors.length]
    const color = this.getTransitionColor(startColor, endColor, transitionProgress)
    this.setState({ bgColor: color })
  }
  getTransitionColor = (x, y, progress) => {
    const rgbX = x
    .replace(/^#/g, '')
    .match(/.{1,2}/g)
    .map(item => parseInt(item, 16))
    const rgbY = y
    .replace(/^#/g, '')
    .match(/.{1,2}/g)
    .map(item => parseInt(item, 16))
    const vect = [
      Math.round((rgbY[0] - rgbX[0]) * progress),  
      Math.round((rgbY[1] - rgbX[1]) * progress),  
      Math.round((rgbY[2] - rgbX[2]) * progress),  
    ]
    const result = '#' + [
      vect[0] + rgbX[0],
      vect[1] + rgbX[1],
      vect[2] + rgbX[2],
    ]
    .map(item => item.toString(16))
    .join('')
    return result
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      Observable.fromEvent(window, "scroll")
      .debounceTime(10)
      .subscribe(() => {
        const offset = window.pageYOffset
        this.pickColor(scrollInterval, bgColors, offset)
      })
    }
  }
  render () {
    const { bgColor } = this.state
    return (
      <div className="app" style={{ background: bgColor }}>
        <PhotoListContainer/>
      </div>
    )
  }
}