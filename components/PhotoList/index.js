import React, { Component } from 'react'
import Photo from '../Photo'

export default class PhotoList extends Component {
  componentDidMount() {
    const { fetch, fetchPage, photos: { page } } = this.props
    fetchPage(page)
  }
  render() {
    const { photos: { photos } } = this.props;
    const length = Object.keys(photos).length
    return (
      <div>
        <h2>PhotoList</h2>
        <div>
          {
            Object.keys(photos).map((key, index) => (
                <Photo key={index} photo={photos[key]} isLast={index === length - 1}/>
            ))
          }
        </div>
      </div>
    )
  }
}