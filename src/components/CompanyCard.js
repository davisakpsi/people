import React from 'react';
import axios from 'axios';
import { Flex } from '@hackclub/design-system';

const baseURL = 'https://people-backend.herokuapp.com';
class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      company: ''
    };
    this.getCompany = this.getCompany.bind(this);
  }

  componentDidMount() {
    this.getCompany(this.props.company);
  }

  getCompany(company) {
    let url = `${baseURL}/people/${company}`;
    axios
      .get(url)
      .then(res => {
        this.setState({
          data: res.data
        });
        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);

    return (
      <React.Fragment>
        {data.map((foo, index) => (
          <div className="Brothers">
            <Flex mx={[1, 2, -3]} wrap justify="center">
              <h3>{foo.name}</h3>
            </Flex>
            <p>{foo.email}</p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default CompanyCard;
