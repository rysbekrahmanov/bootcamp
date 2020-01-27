import React from "react";
import "./App.css";
import axios from 'axios'

import Book from "./components/Book/index";
import AddContact from "./components/AddContact/index";
import Modal from "./components/Modal/index";
import Routes from "./Routes";

class App extends React.Component {
  state = {
    contactsData: [],
    currentContactIndex: null
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    const response = await axios.get('http://localhost:8000/list');
    this.setState({ contactsData: response.data });
  }

  handleModalShow = index => {
    this.setState({
      currentContactIndex: index
    })
  }

  render() {
    const contactsData = this.state.contactsData;

    return (
      <div className="App">
        
        <AddContact
          data={contactsData}
          update={this.fetchData}
        />
        <Book 
          data={contactsData} 
          handleModalShow={this.handleModalShow}
          update={this.fetchData}
        />
        {
          this.state.currentContactIndex !== null && 
            <Modal 
              data={contactsData}
              update={this.fetchData}
              closeEdit={()=>this.handleModalShow(null)}
              contactId={this.state.currentContactIndex}
            />
        }
        <Routes/>
      </div>
    );
  }
}

export default App;