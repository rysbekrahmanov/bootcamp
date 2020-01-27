import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  state = {
    isEdit: false,
    currentContact: {
      name: '',
      lastName: '',
      phone: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps !== this.props) {
      nextState.currentContact = nextProps.data[nextProps.currentContactIndex]
      return true
    } else if (nextState !== this.state) return true
    else return false
  }

  handleCloseModal = event => {
    const className = event.target.className;

    if(className !== 'modal' && className !== 'modal-window__closeBtn') return
    this.props.handleModalShow(null)
    this.setState({
      isEdit: false,
      currentContact: {
        name: '',
        lastName: '',
        phone: ''
      }
    })
  }

  handleIdit = () => {
    const isEdit = !this.state.isEdit;
    this.setState({ isEdit })
  }

  handleNameChange = event => {
    const currentContact = this.state.currentContact;
    const name = event.target.value;

    this.setState({
      currentContact: {...currentContact, name } })
  }

  handleLastNameChange = event => {
    const currentContact = this.state.currentContact;
    const lastName = event.target.value;

    this.setState({
      currentContact: {...currentContact, lastName } })
  }

  handlePhoneChange = event => {
    const currentContact = this.state.currentContact;
    const phone = event.target.value;

    this.setState({
      currentContact: {...currentContact, phone } })

    }
    
    handleCancel = () => {
      const isEdit = !this.state.isEdit;
      const index = this.props.currentContactIndex;
      const currentContact = this.props.data[index];

      this.setState({ isEdit, currentContact })
    }

    handleSave = () => {
      const newData = [...this.props.data];
      const index = this.props.currentContactIndex;
      const currentContact = {...this.state.currentContact};

      newData[index] = currentContact;

      this.props.handleUpdateContactsData(newData)
      this.setState({ isEdit: false })
      this.handleCloseModal({target: { className: 'modal' }})
    }


  render(){
    const currentContact = this.state.currentContact;

      return this.props.status && (
        <>
          {this.state.isEdit ? (
          <div>
            <div onClick={this.handleCloseModal} className="modal">
              <div className="modal-window">
                <button className="modal-window__closeBtn">X</button>
                  <div className="modal-body edit">
                    <input
                      onChange={this.handleNameChange}
                      value={currentContact.name}
                      type="text"
                    />
                    <input
                      onChange={this.handleLastNameChange}
                      value={currentContact.lastName}
                      type="text"
                    />
                    <input 
                      onChange={this.handlePhoneChange}
                      value={currentContact.phone}
                      type="text"
                    />
                  </div>
                  <button onClick={this.handleSave} className="modal-window__btn save">Save</button>
                <button onClick={this.handleCancel} className="modal-window__btn edit">Cancel</button>
              </div>
            </div>
          </div>
          ) : (
          <div onClick={this.handleCloseModal} className="modal">
            <div className="modal-window">
              <button className="modal-window__closeBtn">X</button>
                <div className="modal-body">
                  Name: {currentContact.name} <br />
                  Lastname: {currentContact.lastName} <br />
                  Phone: {currentContact.phone}
                </div>
              <button onClick={this.handleIdit} className="modal-window__btn edit">Edit</button>
            </div>
          </div>
          )}
        </>
      );
  }
}

export default Modal;