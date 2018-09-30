import React, { Component } from 'react';
import { Router } from '@reach/router';

import Company from './components/Company.js';
import CompanyCard from './components/CompanyCard.js';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      Uh-oh! <code>{location.pathname}</code> is not found!
    </h3>
  </div>
);
export default class App extends Component {
  render() {
    return (
      <Router>
        <Company path="/" />
        <CompanyCard path="/:company" />
        <NoMatch default />
      </Router>
    );
  }
}
