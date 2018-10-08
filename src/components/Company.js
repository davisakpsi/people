import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';
import { Container, Flex } from '@hackclub/design-system';
import { Link } from '@reach/router';
import Tilt from 'react-tilt';

import Footer from './Footer';

import users from '../data.json';
import meta from '../meta.json';

import '../App.css';

const { description, url, title, name, img, favicon } = meta;

export default class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({ data: users });
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  static NotMatched = (
    <React.Fragment>
      <p>Company Not Found</p>
    </React.Fragment>
  );

  render() {
    const { search, data } = this.state;

    const searchCompany = _.shuffle(data).filter(
      item => item.company.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    return (
      <React.Fragment>
        <Helmet>
          <title>{name}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={name} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={img} />
          <meta property="og:image:alt" content={description} />
          <meta property="og:url" content={url} />
          <meta name="twitter:title" content={name} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={img} />
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
        <Footer />
      </React.Fragment>
    );
  }
}
