import React, { Component } from 'react';
import './Modal.css';
import axios from 'axios';

class Modal extends Component {
  state = {
    name: "",
    lastName: "",
    phone: "",
    id:""
  };
  

  
  componentDidMount(){
    this.fetchData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps !== this.props) {
      this.props = nextProps;
      this.fetchData()
    }
    return nextProps.data !== this.props.data || nextState !== this.state
  }

  fetchData = async () => {
    const response = await axios.get('http://localhost:8000/list/'+this.props.contactId);
    this.setState( response.data );
  }

  //__________________________________________________________________________

  handleEditContact = async () => {
    if(!this.state.name || !this.state.lastName || !this.state.phone) return

    const obj = {...this.state}
    const response = await axios.patch('http://localhost:8000/list/'+obj.id, obj);

    if(response.status >= 200 && response.status < 300) {
      this.props.update()
      this.props.closeEdit()
      this.setState(
        {
          name: "",
          lastName: "",
          phone: ""
        }
      )
    }
  }
  
  handleInput = e =>{
    const obj = {
      "edit-name-inp": "name",
      "edit-lastName-inp": "lastName",
      "edit-phone-inp": "phone"
    }
    const newState = {...this.state};
    let inpClass = obj[e.target.className];
    newState[inpClass] = e.target.value;
    this.setState( newState );
  }

  render() {
    return (
      <div className="edit-contact">
        <input
          className="edit-name-inp"
          onChange={this.handleInput}
          value={this.state.name}
          type="text"
          placeholder="Name:"
        />
        <input
          className="edit-lastName-inp"
          onChange={this.handleInput}
          value={this.state.lastName}
          type="text"
          placeholder="LastName:"
        />
        <input
          className="edit-phone-inp"
          onChange={this.handleInput}
          value={this.state.phone}
          type="text"
          placeholder="Phone:"
        />
        <button onClick={this.handleEditContact}>save</button>
      </div>
    );
  }
}

export default Modal;