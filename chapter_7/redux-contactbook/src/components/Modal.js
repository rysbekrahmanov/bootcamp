import React, { Component } from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {updateContact} from '../redux/action';
import {withRouter} from 'react-router-dom'

class Modal extends Component {
    state={
        name:"",
        lastName:"",
        number:"",
    }
    handleInputName =event=>{
        const name = event.target.value
        this.setState({name})
    }
    handleInputLastName = event=>{
        const lastName=event.target.value
        this.setState({lastName})
    }
    handleNumberInput = event=>{
        const number=event.target.value
        this.setState({number})
    }
    componentDidMount(){
        const currentIndex = this.props.currentIndex;
        const data = this.props.data;

        this.setState({
            name: currentIndex !== -1? data[currentIndex].name:'',
            lastName: currentIndex !== -1? data[currentIndex].lastName:'',
            number: currentIndex !== -1? data[currentIndex].number:'' 
        })
    }
    handleClick=()=>{
        this.props.updateContact(this.props.data,this.state,this.props.currentIndex)
        this.props.history.push('/')
        
    }
    handleBack =()=>{
        this.props.history.push('/')
    }

    render() {
        return (
            <ul>
                <button onClick={this.handleBack}>X</button>
                <li> <input value={this.state.name} onChange={this.handleInputName} placeholder="name"/> </li>
                <li> <input value={this.state.lastName} onChange={this.handleInputLastName} placeholder="lastname"/> </li>
                <li> <input value={this.state.number} onChange={this.handleNumberInput} placeholder="number"/></li>
                <li> <button onClick={this.handleClick}>Save</button></li>
            </ul>
        );
    }
}

const mapStateToProps = state=>{
    return state
}

const mapDispatchToProps = dispatch =>{
    return {
        updateContact: (data,obj, index)=> dispatch(updateContact(data,obj, index))
    }
}



export default compose(
    withRouter,
    connect(mapStateToProps,mapDispatchToProps)
    ) (Modal);