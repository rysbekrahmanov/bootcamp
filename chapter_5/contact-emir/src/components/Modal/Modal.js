import React  from 'react';

class Modal extends React.Component {
   state = {
       contact:{}
   }
   componentDidUpdate(prevProps){
       if(prevProps ===this.props)
       this.setState({ 
           contact:this.prevProps.data[ prevProps.currentContactIndex]
    })
   }
   setValues = (e)=>{
    let inputs = {
        "modal-inputs-name": "name",
        "modal-inputs-lastName": "lastName",
        "modal-inputs-phone": "phone"

    };

    const contact = {...this.state.inputValue};
    let changedVal = inputs[e.target.className];

    contact[changedVal] = e.target.value;
    this.setState({contact}); 
}
editContact=()=>{
    this.props.editContact(this.state.contact);
}
    render() {
        console.log(this.state)
        const contact = this.state.contact;
        if(this.props.currentContactIndex ===null)return null;
        return (
            <div className="modal-card">
                <input
                className="madal-inputs-name"
                value={contact.name}
                />
                <input
                className="madal-inputs-lastName"
                value={contact.lastName}
                />
                <input
                className="madal-inputs-phone"
                value={contact.phone}
                /> 
                <button 
                onClick={this.editContact}>OK</button>  
            </div>
        );
    }
}

export default Modal;