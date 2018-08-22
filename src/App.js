import React, { Component } from 'react';
import { Router, Link } from '@reach/router'

import Company from './components/Company.js'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Company path="/" />
      </Router>
    )
  }
}
