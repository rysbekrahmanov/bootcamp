import React, { Component } from 'react';

class AddSome extends Component {
    state={
        count:1
    }
    render() {
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.setState({count: this.state.count+1})}>+</button>
            </>
        );
    }
}

export default AddSome;