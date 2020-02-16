import React from 'react';

import AddTodo from './components/AddTodo';
import List from './components/List';

function App(props) {
  
  return (
    <div>
      <AddTodo />
      <List />
    </div>
  );
}

export default  App;
