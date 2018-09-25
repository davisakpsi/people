import React from 'react';
import { Container, Flex } from '@hackclub/design-system';
import { Link } from '@reach/router';
import Tilt from 'react-tilt';

import users from '../data.json';

import '../App.css';

export default class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search } = this.state;

    const searchCompany = users.filter(
      item => item.company.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    return (
      <div className="App">
        <h1>AKΨ Upsilon Psi (🛠)</h1>
        <h2>Discover brothers in the professional world</h2>
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
            <Link to={`/${e.company}`} key={index}>
              <Tilt options={{ max: 25 }}>
                <div className="Results">
                  <Container px={3} pb={4}>
                    <Flex mx={[1, 2, -3]} wrap justify="center">
                      <h3>{e.company}</h3>
                    </Flex>
                  </Container>
                </div>
              </Tilt>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
