import React from 'react';
import axios from 'axios';
import { Container, Flex } from '@hackclub/design-system';
import { Link } from '@reach/router';
import Tilt from 'react-tilt';

import '../App.css';

const baseURL = 'https://people-backend.herokuapp.com';

export default class Company extends React.Component {
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
    const { search, data, isLoading } = this.state;

    console.log(data);

    // Push companies to a new []
    // const companyListData = companyData.push(data => data.company)
    // console.log(companyListData)

    // filter + indexof
    // https://gist.github.com/telekosmos/3b62a31a5c43f40849bb
    const cleanData = data.filter((v, i) => data.indexOf(v) === i);
    // const cleanData = data.filter((el, index, a) => index === a.indexOf(el.company))
    // const cleanData = data.map(foo => [...new Set(data.company)])
    // const cleanData = data.reduce((x, y) => x.includes(y) ? x : [...x, y], [])
    console.log(cleanData);

    // Filter and search company
    const searchCompany = data.filter(
      item => item.company.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    console.log(searchCompany);

    if (isLoading) return Company.LoadingIndicator;
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
            <Link to={`/people/${e.company}`} key={index}>
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
