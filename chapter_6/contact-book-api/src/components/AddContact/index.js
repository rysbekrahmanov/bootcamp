import React, { Component } from "react";
import './AddContact.css';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: "",
    lastName: "",
    phone: ""
  };
  

  //__________________________________________________________________________

  handleAddContact = async () => {
    if(!this.state.name || !this.state.lastName || !this.state.phone) return

    const obj = {...this.state}
    const response = await axios.post('http://localhost:8000/list', obj);

    if(response.status > 200 && response.status < 300) {
      this.props.update()
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
      "add-name-inp": "name",
      "add-lastName-inp": "lastName",
      "add-phone-inp": "phone"
    }
    const newState = {...this.state};
    let inpClass = obj[e.target.className];
    newState[inpClass] = e.target.value;
    this.setState( newState );
  }

  render() {
    return (
      <div className="add-contact">
        <input
          className="add-name-inp"
          onChange={this.handleInput}
          value={this.state.name}
          type="text"
          placeholder="Name:"
        />
        <input
          className="add-lastName-inp"
          onChange={this.handleInput}
          value={this.state.lastName}
          type="text"
          placeholder="LastName:"
        />
        <input
          className="add-phone-inp"
          onChange={this.handleInput}
          value={this.state.phone}
          type="text"
          placeholder="Phone:"
        />
        <button onClick={this.handleAddContact}>Add Contact</button>
      </div>
    );
  }
}

export default AddContact;