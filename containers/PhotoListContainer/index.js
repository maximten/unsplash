import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch, fetchPage } from '../../redux/actions/photos.js'
import PhotoList from '../../components/PhotoList'

class PhotoListContainer extends Component {
  render () {
    const { fetch, fetchPage, photos } = this.props
    return (
      <PhotoList fetch={fetch} fetchPage={fetchPage} photos={photos}/>
    )
  }
}

const mapStateToProps = ({ photos }) => ({
  photos
})
  
const mapDispatchToProps = (dispatch) => ({
  fetch: () => {
    dispatch(fetch())
  },
  fetchPage: (page) => {
    dispatch(fetchPage(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListContainer)