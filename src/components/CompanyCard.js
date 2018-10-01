import React from 'react';
import Helmet from 'react-helmet';
import { Container, Flex, Image, Link, Text } from '@hackclub/design-system';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';

import BackButton from './BackButton';

import users from '../data.json';
import meta from '../meta.json';

import '../App.css';

library.add(faEnvelope);
library.add(faLink);

const { description, url, title, name, img, favicon } = meta;
class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.setState({ data: users });
  }

  render() {
    const { company } = this.props;
    const { data } = this.state;

    const filterCompanyName = data.filter(item => item.company === company);

    const pNameStyle = {
      marginTop: '90px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    const pTitleStyle = {
      marginBottom: '6px',
      fontSize: '10.8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '210px'
    };

    const aWebsiteStyle = {
      marginTop: '6px',
      fontWeight: '500',
      fontSize: '15px',
      textAlign: 'center',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      padding: '9px',
      borderRadius: '4px',
      backgroundColor: '#5F84FF',
      color: 'white',
      width: '117px',
      transition: 'all 0.3s ease 0s',
      position: 'absolute',
      bottom: '13px'
    };

    const faIconStyle = {
      display: 'block',
      right: '11px',
      top: '8px',
      position: 'absolute'
    };

    return (
      <React.Fragment>
        <Helmet>
          <title>
            {company} > {name}
          </title>
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
        <BackButton />
        <React.Fragment>
          <Flex mx={[1, 2, -3]} wrap justify="center">
            <h1 style={{ fontSize: '2.5em' }}>{company}</h1>
          </Flex>
          {filterCompanyName.map(item =>
            item.user.map((foo, index) => (
              <div className="CompanyCard" key={index}>
                <div className="CompanyUsers">
                  <Container px={3} pb={20}>
                    <Flex mx={[1, 2]} wrap justify="center">
                      <Image
                        src={foo.avatar}
                        alt="avatar"
                        style={{
                          position: 'absolute',
                          top: '0',
                          width: '120px',
                          height: '120px'
                        }}
                      />
                      <Text style={pNameStyle}>{foo.name}</Text>
                      <Text style={pTitleStyle}>{foo.title}</Text>
                      <Link href={`mailto:${foo.email}`} color="slate">
                        <FontAwesomeIcon icon="envelope" style={faIconStyle} />
                      </Link>
                      <Link
                        href={foo.website}
                        target="_blank"
                        style={aWebsiteStyle}
                      >
                        <FontAwesomeIcon icon="link" /> website
                      </Link>
                    </Flex>
                  </Container>
                </div>
              </div>
            ))
          )}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default CompanyCard;
