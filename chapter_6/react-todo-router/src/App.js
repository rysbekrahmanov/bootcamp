import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import './App.css';

import AddTodo from './components/AddTodo/AddTodo';
import List from './components/list/List';

class App extends React.Component{
  state = {
    list: [
      {
        value: 'NewTask',
        status: true
      }
    ]
  }

  handleTodoList = list =>{
    this.setState({list})
  }



  render (){
    
    const list = this.state.list;

    return(
    <Router>
     <div className="App">
       <Switch>
       <Route exact path ="/">
       <AddTodo
         data={list}
         onChange={this.handleTodoList}
       />
       <Link to="/list">
         <button>Show list</button>
       </Link>
       </Route>
       <Route exact path="/list">
       <List
         data={list}
         onChange={this.handleTodoList}
       />
       <Link to="/">
         <button>Home</button>
       </Link>
       </Route>
       </Switch>
     </div>
     </Router>
   );
  }
}

export default App;
