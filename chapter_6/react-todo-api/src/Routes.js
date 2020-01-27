import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import List from './components/List/List';
import AddTodo from './components/AddTodo/AddTodo';
import AddTodoList from './components/AddTodo/AddTodoList';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AddTodoList} />
          <Route exact path="/list" component={List} />
          <Route exact path="/add" component={AddTodo} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;