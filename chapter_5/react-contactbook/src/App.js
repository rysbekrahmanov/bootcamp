import React from 'react';
import './App.css';

import List from './components/List/List';
import AddContact from './components/AddContact/AddContact';

class App extends React.Component {
  state = {
    list: [{
      value: 'Rakhmanov',
      status: true
    },{
      value: 'Rysbek',
      status: true
    },{
      value: '+996755759191',
      status: true
    }
    ]
  }
  
  handleContact = list => {
    this.setState({ list })
  }

  render() {
    const list = this.state.list;
   return (
    <div className="App">
      <AddContact
        data={list}
        onChange={this.handleContact}
      />
      <List
        data={list}
        onChange={this.handleContact}
      />
    </div>
    );
  }
}

export default App;
