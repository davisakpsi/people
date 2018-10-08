import React from 'react';
import { Container, Text, Link } from '@hackclub/design-system';

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container maxWidth={100} align="center" style={{ marginBottom: '0' }}>
          <Text f={1} my={5} color="slate" align="center">
            Designed and developed in Davis, California <br />& Kuala Lumpur,
            Malaysia
          </Text>
          <Text f={2} my={-3} align="center">
            <Link
              href="https://github.com/lovincyrus/people/blob/master/HOWTO.md"
              target="_blank"
              color="black"
              bold
            >
              About
            </Link>
            <Link
              href="https://airtable.com/shrOjbaauwJU0t4QU"
              target="_blank"
              color="black"
              bold
              style={{ paddingLeft: '18px' }}
            >
              Feedback
            </Link>
            <Link
              href="https://airtable.com/shrrnE5M57XIOwOtu"
              target="_blank"
              color="black"
              bold
              style={{ paddingLeft: '18px' }}
            >
              Add Your Company
            </Link>
          </Text>
        </Container>
      </React.Fragment>
    );
  }
}
