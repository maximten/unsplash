import React, { Component } from 'react'
import 'isomorphic-fetch'
import AppContainer from '../containers/AppContainer'
import makeStore from '../redux'
import { success } from '../redux/actions/photos'

export default class Index extends Component {
  static async getInitialProps({ req }) {

    const store = makeStore()
    const env = require('../env.js')
    const { accessKey} = env
    const items = await fetch('https://api.unsplash.com/photos?page=1', {
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    })
    .then(response => response.json())
    store.dispatch(success(items))

    return { initialStore: store.getState() }
  }
  render() {
    const { initialStore } = this.props
    const store = makeStore(initialStore)
    return <AppContainer store={store}/>
  }
}