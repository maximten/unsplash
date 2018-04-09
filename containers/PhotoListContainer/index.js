import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPage } from '../../redux/actions/photos.js'
import PhotoList from '../../components/PhotoList'

class PhotoListContainer extends Component {
  render () {
    const { fetchPage, photos } = this.props
    return (
      <PhotoList fetchPage={fetchPage} photos={photos}/>
    )
  }
}

const mapStateToProps = ({ photos }) => ({
  photos
})
  
const mapDispatchToProps = (dispatch) => ({
  fetchPage: (page) => {
    dispatch(fetchPage(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListContainer)