import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
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
    const searchCompany = users.filter(item =>
      item.company.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    return (
      <div className="App">
        <h1>AKΨ</h1>
        <h2>Discover Brothers in the professional world</h2>
        <div className="SearchBar">
          <form>
            <input
              placeholder="Search by company"
              search={search}
              onChange={this.onChange}
            />
          </form>
        </div>
        <div className="Company">
          {searchCompany.map((e, index) => (
            <div className="Results" key={index}>
              <Flex alignItems="center" flexWrap="wrap">
                <Box width={1/3} px={2}>
                  <h3>{e.name}</h3>
                  <h3>{e.company}</h3>
                </Box>
              </Flex>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
