import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch } from '../../redux/actions/photos.js'
import PhotoList from '../../components/PhotoList'

class PhotoListContainer extends Component {
  render () {
    const { fetch, photos } = this.props
    return (
      <PhotoList fetch={fetch} photos={photos}/>
    )
  }
}

const mapStateToProps = ({ photos }) => ({
  photos
})
  
const mapDispatchToProps = (dispatch) => ({
  fetch: () => {
    dispatch(fetch())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListContainer)