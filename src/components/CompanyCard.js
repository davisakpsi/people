import React, { Component } from 'react';
import { Flex } from '@hackclub/design-system';

import brothers from '../brothers.json';

class CompanyCard extends Component {
  render() {
    return (
      <React.Fragment>
        {brothers.map((foo, index) => (
          <div className="Brothers">
            <Flex mx={[1, 2, -3]} wrap justify="center">
              <h3>{foo.name}</h3>
            </Flex>
            <p>{foo.link}</p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default CompanyCard;
