import React from 'react';
import { Container, Flex } from '@hackclub/design-system';

import users from '../data.json';

import '../App.css';

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
                      <img
                        src={foo.avatar}
                        alt="avatar"
                        style={{ width: '120px', height: '120px' }}
                      />
                      <p style={pStyle}>{foo.name}</p>
                      <a
                        href={foo.website}
                        target="_blank"
                        style={aWebsiteStyle}
                      >
                        website
                      </a>
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
