import React, { Component } from 'react'
import Photo from '../Photo'
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
  render() {
    const { photos: { photos } } = this.props
    const { colCount } = this.state
    const cols = Object.keys(photos).reduce((carry, key, index) => {
      carry[index % colCount].push(photos[key])
      return carry
    }, Array(colCount).fill(null).map(i => []))
    return (
      <div>
        <div className="columns-container">
          {
            cols.map((col, index) => {
              return (
                <div key={index} className="column">
                {
                  col.map((item, index) => {
                    return (
                      <Photo key={index} photo={item}/>
                    )
                  })
                }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}