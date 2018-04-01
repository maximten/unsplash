import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from '../../components/App'

export default class AppContainer extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}