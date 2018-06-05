import React, { Component } from 'react';
import './App.css';

import users from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search } = this.state;
    const searchUser = users.filter(item =>
      item.company.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    return (
      <div className="App">
        <div className="SearchBar">
          <form>
            <input
              placeholder="Search"
              search={search}
              onChange={this.onChange}
            />
          </form>
        </div>
        <div className="Name">
          {searchUser.map((e,index) => (
            <div className="Results" key={index}>
              <h3>{e.name}</h3>
              <h3>{e.company}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
