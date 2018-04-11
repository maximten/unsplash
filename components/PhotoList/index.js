import React, { Component } from 'react'
import classNames from 'classnames'
import Photo from '../Photo'
import ScrollWatcher from '../ScrollWatcher'
import Loader from '../Loader'
import Container from '../Container'
import { screenWidthMd, screenWidthBg } from '../constants.js'
import './index.less'

export default class PhotoList extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      colCount: 3,
      bottomReached: false,
    }
  }
  componentDidMount() {
    this.setColCount()
    window.onresize = this.setColCount
  }
  setColCount = () => {
    const width = window ? window.innerWidth : screenWidthBg 
    let colCount = null
    if (width >= screenWidthBg) {
      colCount = 3
    } else if (width >= screenWidthMd) {
      colCount = 2
    } else {
      colCount = 1
    }
    this.setState({ colCount })
  }
  fetchNextPage = () => {
    const { photos: { page, fetching }, fetchPage } = this.props
    if (!fetching) {
      fetchPage(page + 1)
    }
  }
  handleScroll = (watcher) => {
    const { bottomReached } = this.state
    const bottomReachedNow = watcher.isInViewport
    if (!bottomReached && bottomReachedNow) {
      this.fetchNextPage()
    }
    this.setState({ bottomReached: bottomReachedNow })
  }
  render() {
    const { photos: { photos, fetching } } = this.props
    const { colCount } = this.state
    const heights = Array(colCount).fill(0)
    const cols = Object.keys(photos).reduce((carry, key, index) => {
      const photo = photos[key]
      const colIndex = heights.indexOf(Math.min(...heights))
      heights[colIndex] = heights[colIndex] + photo.height
      carry[colIndex].push(photo)
      return carry
    }, Array(colCount).fill(null).map(i => []))
    const colClass = classNames("column", {"single" : colCount === 1})
    return (
      <div className="photo-list">
        <Container>
          <div className="columns-container">
            {
              cols.map((col, colIndex) => (
                  <div key={colIndex} className={colClass}>
                  {
                    col.map((item, index) => (
                        <div key={index}>
                          <Photo photo={item}/>
                        </div>
                      )
                    )
                  }
                  </div>
                )
              )
            }
          </div>
          <ScrollWatcher stateChange={this.handleScroll}/>
          {
            fetching &&
            <Loader/>
          }
        </Container>
      </div>
    )
  }
}