import React  from 'react';
import './AddTodo.css'

class AddTodo extends React.Component {
    state={
        inputValue:{
            name:"",
            lastName:"",
            phone:""
        }
    }

    setValues = (e)=>{
        let inputs = {
            "addTodo-inputs-name": "name",
            "addTodo-inputs-lastName": "lastName",
            "addTodo-inputs-phone": "phone"

        };

        const inputValue = {...this.state.inputValue};
        let changedVal = inputs[e.target.className];

        inputValue[changedVal] = e.target.value;
        this.setState({inputValue});
    }

    addNewContact(){
        this.props.addNewContact(this.state.inputValue)
        this.setState({inputValue:{
            name:"",
            lastName:"",
            phone: ""
        }})
    }
    render() {
        const inputValue = {...this.state.inputValue};
        return (
            <div className="addTodo">
                <div className="addTodo-inputs">
                   <input
                   onChange={this.setValues}                    
                   className="addTodo-inputs-name"
                   placeholder="name"
                   value={inputValue.name}

                   />
                   <input
                   onChange={this.setValues}
                   placeholder="last name"
                   className="addTodo-inputs-lastName"
                   value={inputValue.lastName}
                   />
                   <input
                   onChange={this.setValues}
                   className="addTodo-inputs-phone"
                   placeholder="phone number"
                   value={inputValue.phone}
                   />
                </div>
                <button onClick={()=>this.addNewContact()}>Add</button>
            </div>
        );
    }
}

export default AddTodo;