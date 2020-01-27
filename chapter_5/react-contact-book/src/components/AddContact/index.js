import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    lastName: "",
    phone: ""
  };

  handleNameInput = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleLastNameInput = event => {
    const lastName = event.target.value;
    this.setState({ lastName });
  };

  handlePhoneInput = event => {
    const phone = event.target.value;
    this.setState({ phone });
  };

  handleAddContact = () => {
    const name = this.state.name;
    const lastName = this.state.lastName;
    const phone = this.state.phone;
    const data = [...this.props.data];

    if (!name || !lastName || !phone) return;

    data.push({
      name,
      lastName,
      phone
    });

    this.props.handleUpdateContactsData(data);
    this.setState({
      name: "",
      lastName: "",
      phone: ""
    });
  };

  render() {
    return (
      <div className="add-contact">
        <input
          onChange={this.handleNameInput}
          value={this.state.name}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={this.handleLastNameInput}
          value={this.state.lastName}
          type="text"
          placeholder="LastName"
        />
        <input
          onChange={this.handlePhoneInput}
          value={this.state.phone}
          type="number"
          placeholder="Phone"
        />
        <button onClick={this.handleAddContact}>Add Contact</button>
      </div>
    );
  }
}

export default AddContact;