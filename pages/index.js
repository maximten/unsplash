import React, { Component } from 'react'
import 'isomorphic-fetch'
import AppContainer from '../containers/AppContainer'
import makeStore from '../redux'
import { successPage } from '../redux/actions/photos'
import { setMobile } from '../redux/actions/app'

export default class Index extends Component {
  static async getInitialProps({ req }) {

    const userAgent = req.headers['user-agent'];
    const isMobile = userAgent.match(/(Android|iPhone|Phone)/g) ? true : false;

    const store = makeStore()
    const env = require('../env.js')
    const { accessKey} = env
    const items = await fetch('https://api.unsplash.com/photos?page=1', {
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    })
    .then(response => response.json())
    store.dispatch(successPage(items, 1))
    store.dispatch(setMobile(isMobile))

    return { initialStore: store.getState() }
  }
  render() {
    const { initialStore } = this.props
    const store = makeStore(initialStore)
    return <AppContainer store={store}/>
  }
}