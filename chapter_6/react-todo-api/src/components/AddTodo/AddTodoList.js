import React from 'react';

import List from './components/List/List';

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
      </div>
    )
  }
}

export default AddTodoList;