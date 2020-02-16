import React, { Component } from 'react';

import {connect} from 'react-redux';
import { createTask } from '../redux/action';



class AddContact extends Component {
    state={
        data:{
            name:'',
            lastName:'',
            number:''
        }
  
    }
    handleNameInput =event=>{
        const name = event.target.value
        this.setState({name})
        this.setState({
            data: {
                ...this.state.data,
                name
            }
        })
    }
    handleLastNameInput = event=>{
        const lastName = event.target.value
        this.setState({lastName})
        this.setState({
            data: {
                ...this.state.data,
                lastName}
        })
    }
    handleNumberInput = event=>{
        const number = event.target.value
        this.setState({number})
        this.setState({
            data: {
                ...this.state.data,
                number}
        })
    }


    handleClick = ()=>{
        this.props.dispatch(
            createTask(this.props.data, this.state.data.name, this.state.data.lastName, this.state.data.number)

        )
        this.setState({
            data:{
            name:'',
            lastName:'', 
            number:''
          }
        })
    }
    render() {
        return (
            <>
            <div>
               <input onChange={this.handleNameInput} type="text" placeholder="name"value={this.state.data.name}
               /> 
               <input onChange={this.handleLastNameInput} type="text" placeholder="last name" value ={this.state.data.lastName}
               /> 
               <input onChange ={this.handleNumberInput} type="text" placeholder="number" value ={this.state.data.number}
               /> 
               <button onClick={this.handleClick} >AddContact</button>
               </div>
            </>
        );
    }
}

const mapStateToProps= state =>{
    return{
        data: state.data
    }
}

export default connect(mapStateToProps) (AddContact);