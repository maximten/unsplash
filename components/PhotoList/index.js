import React, { Component } from 'react'
import _ from 'lodash'

export default class PhotoList extends Component {
  componentDidMount() {
    const { fetch, fetchPage, photos: { page } } = this.props
    fetchPage(page)
  }
  render() {
    const { photos: { photos } } = this.props;
    return (
      <div>
        <h2>PhotoList</h2>
        <div>
          {
            _.map(photos, item => (
              <div key={item.id}>
                <img src={item.urls.small} alt={item.description}/>
                <br/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}