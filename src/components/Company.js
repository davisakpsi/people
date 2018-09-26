import React from 'react';
import Helmet from 'react-helmet';
import { Container, Flex, Text, Link as URL } from '@hackclub/design-system';
import { Link } from '@reach/router';
import Tilt from 'react-tilt';

import users from '../data.json';
import meta from '../meta.json';

import '../App.css';

const { description, url, title, name, favicon } = meta;

export default class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: []
      // hasMore: true
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({ data: users });
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  // handleClick = () => {
  //   this.setState({
  //     hasMore: this.state.data.length < 100
  //   });
  //   console.log(this.state.hasMore);
  //   console.log(this.state.data);
  // };
  // <Button fontSize={1} chevronRight onClick={this.handleClick}>
  //   See more
  // </Button>

  static NotMatched = (
    <React.Fragment>
      <p>Company Not Found</p>
    </React.Fragment>
  );

  render() {
    const { search, data } = this.state;

    const searchCompany = data.filter(
      item => item.company.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    return (
      <React.Fragment>
        <Helmet>
          <title>{name}</title>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <link rel="canonical" href={url} />
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <h1>AKΨ Upsilon Psi</h1>
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
        <Container maxWidth={100} align="center" style={{ marginBottom: '0' }}>
          <Text f={1} my={5} color="slate" align="center">
            Designed and developed in Davis, California <br />& Kuala Lumpur,
            Malaysia
          </Text>
          <Text f={2} my={-3} align="center">
            <URL
              href="https://airtable.com/shrOjbaauwJU0t4QU"
              target="_blank"
              color="black"
              bold
            >
              Feedback
            </URL>
          </Text>
        </Container>
      </React.Fragment>
    );
  }
}
