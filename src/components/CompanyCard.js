import React from 'react';
import Helmet from 'react-helmet';
import { Container, Flex, Image, Link, Text } from '@hackclub/design-system';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';

import users from '../data.json';
import meta from '../meta.json';

import '../App.css';

library.add(faEnvelope);
library.add(faLink);

const { description, url, title, name, favicon } = meta;
class CompanyCard extends React.Component {
  render() {
    const { company } = this.props;

    const filterCompanyName = users.filter(item => item.company === company);

    const pStyle = {
      marginTop: '10px',
      marginBottom: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    const aWebsiteStyle = {
      fontWeight: '500',
      fontSize: '15px',
      textAlign: 'center',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      padding: '9px',
      borderRadius: '4px',
      backgroundColor: '#5F84FF',
      color: 'white',
      width: '117px',
      transition: 'all 0.3s ease 0s'
    };

    const faIconStyle = {
      display: 'block',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
      right: '11px',
      top: '-6px',
      position: 'absolute'
    };

    return (
      <React.Fragment>
        <Helmet>
          <title>
            {company} > {name}
          </title>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <link rel="canonical" href={url} />
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
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
                        style={{ width: '120px', height: '120px' }}
                      />
                      <Text style={pStyle}>{foo.name}</Text>
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
