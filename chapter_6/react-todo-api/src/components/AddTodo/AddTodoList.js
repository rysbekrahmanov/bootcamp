import React from 'react';

import AddTodo from './AddTodo';
import List from '../List/List';


class AddTodoList extends React.Component {
  state = {
    data: []
  }

  handleAddTodo = data => {
    this.setState({ data });
  }
  
  render() {
    return (
      <div>
        <AddTodo
          onChange={this.handleAddTodo}
        />
        <List
          data={this.state.data}
        />
        <Modal />
      </div>
    )
  }
}

export default AddTodoList;