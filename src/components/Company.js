import React from 'react';
import axios from 'axios';
import { Container, Flex } from '@hackclub/design-system';
import { Link } from '@reach/router';
import Tilt from 'react-tilt';

import '../App.css';

// import users from '../data.json';

const baseURL = 'https://people-backend.herokuapp.com';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [],
      isLoading: true
    };
    this.onChange = this.onChange.bind(this);
    this.getCompany = this.getCompany.bind(this);
  }

  componentDidMount() {
    this.getCompany();
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  getCompany() {
    let url = `${baseURL}/people`;
    axios
      .get(url)
      .then(res => {
        this.setState({
          data: res.data,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  static LoadingIndicator = (
    <React.Fragment>
      <p>Loading...</p>
    </React.Fragment>
  );

  render() {
    const { search, data } = this.state;

    const searchCompany = data.filter(
      item => item.company.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    if (this.state.isLoading) return App.LoadingIndicator;
    return (
      <div className="App">
        <h1>AKΨ Upsilon Psi (🛠)</h1>
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
            <Link to={`/company/${index}`} key={index}>
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
