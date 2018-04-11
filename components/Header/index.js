import React, { Component } from 'react'
import Container from '../Container'
import './index.less'

export default class Header extends Component {
  render () {
    return (
      <header>
        <Container>
          <h1>Unsplash</h1>          
        </Container>
      </header>
    )
  }
}