import React from 'react';
import { Link } from '@hackclub/design-system';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft);

export default class BackButton extends React.Component {
  render() {
    const faIconStyle = {
      display: 'block',
      left: '20px',
      top: '-10px',
      width: '30px',
      height: '30px',
      position: 'absolute'
    };

    return (
      <React.Fragment>
        <Link href="/" color="black">
          <FontAwesomeIcon icon="arrow-left" style={faIconStyle} />
        </Link>
      </React.Fragment>
    );
  }
}
