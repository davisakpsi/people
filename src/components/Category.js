import React from 'react';
import '../App.css';

import users from '../data.json';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = { company: {} };

    console.log(props);
  }

  render() {
    const { company } = this.state;
    const groupByCompany = users.filter(item => company.push(item.company));
    // const searchCompany = users.filter(item =>
    //   item.company.toLowerCase().indexOf(search.toLowerCase()) !== -1);
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

export default Category;