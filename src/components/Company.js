import React, { Component } from 'react';
import { Container, Flex } from '@hackclub/design-system';
import { Link } from 'react-router-dom';
import '../App.css';

import users from '../data.json';

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
        <h1>AKΨ Upsilon Psi</h1>
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
              <Link to={`company/${e.company}`}>
                <div className="Results" key={index}>
                  <Container px={3} pb={4}>
                    <Flex mx={[1, 2, -3]} wrap justify="center">
                      <h3>{e.company}</h3>
                    </Flex>
                  </Container>
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
