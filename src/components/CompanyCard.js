import React from 'react';
import Helmet from 'react-helmet';
import { Container, Flex, Image, Link } from '@hackclub/design-system';

import users from '../data.json';
import meta from '../meta.json';

import '../App.css';

const { description, url, title, name, favicon } = meta;
class CompanyCard extends React.Component {
  render() {
    const { company } = this.props;

    const filterCompanyName = users.filter(item => item.company === company);

    const pStyle = {
      marginBottom: '8px'
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
      width: '100px',
      transition: 'all 0.3s ease 0s'
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
        <div className="Brothers">
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
                      <p style={pStyle}>{foo.name}</p>
                      <Link
                        href={foo.website}
                        target="_blank"
                        style={aWebsiteStyle}
                      >
                        website
                      </Link>
                    </Flex>
                  </Container>
                </div>
              </div>
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyCard;
