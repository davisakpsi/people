import React from 'react';
import '../App.css';

import users from '../data.json';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = { company: {} };
  }

  render() {
    const { company } = this.state;
    const groupByCompany = users.filter(item => company.push(item.company));

    return (
      <div>
        {groupByCompany.map((e, index) => (
          <div className="Category" key={index}>
            <h3>{e.name}</h3>
          </div>
        ))}
      </div>
    );
  }
}
