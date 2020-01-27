import React from 'react';
import './App.css';

import List from "./components/List/List";
import AddTodo from "./components/AddTodo/AddTodo";
import Modal from './components/Modal/Modal';

class App extends React.Component {
  state={
    list:[
      {
        name: 'jamanbek',
        lastName:'jakshylykov',
        phone: "+996700339393"
      },{
        name: 'aldapsayar',
        lastName:'berbesov',
        phone: "+996700339393"
      },{
        name: 'judop',
        lastName:'jatarov',
        phone: "+996700339393"
      }
      
    ],
    currentContactIndex: null
  }
  addNewContact =(obj)=>{
    const list =[...this.state.list];
    list.push(obj);
    this.setState({ list });
  }
  deleteContact = (index) =>{
    const list =[...this.state.list];
    list.splice(index,1);
    this.setState({list});
  }
  editContact = (index, obj)=>{
    const list =[...this.state.list];
    list[this.state.currentContactIndex]= obj
    this.setState({
      list,
      currentContactIndex:null
    });
  }
  openEdit =(index)=>{
    this.setState({ currentContactIndex: index })

  }

  render(){
    const list = this.state.list;
    return (
      <div className="App">
        <AddTodo
          addNewContact={this.addNewContact}
          data={list}
        />
        <List
          openEdit = {this.openEdit}
          deleteContact={this.deleteContact}
          data={list}
        />
        (this.props.currentContactIndex ===null)
        <Modal
        editContact = {this.editContact}
         currentContactIndex = {this.state.currentContactIndex}
         data = {list}
        />
      </div>
    );
  }
}

export default App;
