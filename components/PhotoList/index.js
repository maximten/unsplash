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
      colCount: 3 
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
  fetchNextPage = (currentPage) => {
    const { photos: { page, fetching }, fetchPage } = this.props
    if (!fetching && currentPage === page) {
      fetchPage(page + 1)
    }
  }
  render() {
    const { photos: { photos, pageSize, fetching } } = this.props
    const { colCount } = this.state
    const cols = Object.keys(photos).reduce((carry, key, index) => {
      carry[index % colCount].push(photos[key])
      return carry
    }, Array(colCount).fill(null).map(i => []))
    const pageDelimeter = Math.floor(pageSize / colCount)
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
                          {
                            colIndex === 0 && (index + 1) % pageDelimeter === 0 &&
                            <ScrollWatcher callback={() => this.fetchNextPage((index + 1) / pageDelimeter)}/>
                          }
                        </div>
                      )
                    )
                  }
                  </div>
                )
              )
            }
          </div>
          {
            fetching &&
            <Loader/>
          }
        </Container>
      </div>
    )
  }
}