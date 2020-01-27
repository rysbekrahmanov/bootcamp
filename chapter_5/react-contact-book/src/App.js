import React from "react";
import "./App.css";

import Book from "./components/Book";
import AddContact from "./components/AddContact";
import Modal from "./components/Modal"


class App extends React.Component {
  state = {
    contactsData: [
      {
        name: "Jack",
        lastName: "Jackson",
        phone: "+996550999999"
      }
    ],
    currentContactIndex: null,
    modalIsShow: false
  }

  handleUpdateContactsData = contactsData => {
    this.setState({ contactsData });
  }

  handleModalShow = index => {
    this.setState({ 
      modalIsShow: !this.state.modalIsShow,
      currentContactIndex: index
    })
  }

  render() {
    const contactsData = this.state.contactsData;

    return (
      <div className="App">
        <Modal 
          data={contactsData}
          status={this.state.modalIsShow}
          handleModalShow={this.handleModalShow}
          currentContactIndex={this.state.currentContactIndex}
          handleUpdateContactsData={this.handleUpdateContactsData}
        />
        <AddContact
          data={contactsData}
          handleUpdateContactsData={this.handleUpdateContactsData}
        />
        <Book 
          data={contactsData} 
          handleModalShow={this.handleModalShow}
          handleUpdateContactsData={this.handleUpdateContactsData}
        />
     
      </div>
    );
  }
}

export default App;