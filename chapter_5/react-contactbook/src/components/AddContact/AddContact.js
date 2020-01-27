import React from 'react';

class AddContact extends React.Component {
    state = {
        inputName: '',
        inputLastName: '',
        inputNumber: '',
    }

    handleInput = event => {
        const inputName = event.target.value;
        this.setState({ inputName })
    }

    handleInputLastName = event => {
        const inputLastName = event.target.value;
        this.setState({ inputLastName })
    }

    handleInputNumber = event => {
        const inputNumber = event.target.value;
        this.setState({ inputNumber })
    }



    handleClick = () => {
        const newArr = [...this.props.data];
        const valueName = this.state.inputName;
        const valueLastname = this.state.inputLastName;
        const valueNumber = this.state.inputNumber;
        const obj = {
            valueName,
            valueLastname,
            valueNumber, 
            status: false
        }


        

        if(!valueName) return
        if(!valueLastname) return
        if(!valueNumber) return

        newArr.push(obj)
        this.props.onChange(newArr)
        
        this.setState({ inputName: '' });
        this.setState({ inputLastName: '' });
        this.setState({ inputNumber: '' });
    }

    
    render() {
        return (
            <>
                 <input onChange={this.handleInput}
                 value={this.state.inputName}
                 type="text" placeholder="name"
                />

                 <input onChange={this.handleInputLastName}
                 value={this.state.inputLastName}
                 type="text" placeholder="last name"
                />

                 <input onChange={this.handleInputNumber}
                 value={this.state.inputNumber}
                 type="text" placeholder="number"
                />
                <button onClick={this.handleClick}>
                    Add contact
                </button>
            </>
        )
    }
}

export default AddContact;