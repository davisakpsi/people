import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Company from './components/Company.js';
import Category from './components/Category.js';

const CategoryComponent = ({ match }) => (
  <div>
    <Category id={match.params.id} />
  </div>
);

class ModalSwitch extends React.Component {
  componentWillUpdate(nextProps) {
    const { location } = this.props;

    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  previousLocation = this.props.location;

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Company} />
          <Route path="/company/:id" component={CategoryComponent} />
        </Switch>
      </div>
    );
  }
}

const App = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default App;