import React, { Component } from 'react';
import { Router } from '@reach/router';

import Company from './components/Company.js';
import CompanyCard from './components/CompanyCard.js';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Company path="/" />
        <CompanyCard path="/:company" />
      </Router>
    );
  }
}
