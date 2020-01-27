import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Book from './components/Book/index';
import AddContact from './components/AddContact/index';
import Modal from './components/Modal/index';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Modal" component={Modal} />
          <Route exact path="/Book" component={Book} />
          <Route exact path="/add" component={AddContact} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;