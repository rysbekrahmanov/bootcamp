import React from 'react';
import axios from 'axios';

class AddTodo extends React.Component {
  state = {
    inputVal: ''
  }

  handleInput = event => {
    this.setState({ inputVal: event.target.value })
  }

  handleAddTodo = async () => {
    if(!this.state.inputVal) return

    const obj = {
      text: this.state.inputVal,
      status: false
    }
    const response = await axios.post('http://localhost:8000/list', obj);

    if(response.status > 200 && response.status < 300) {
      const getResponse = await axios.get('http://localhost:8000/list')

      if(!this.props.onChange) return
      this.props.onChange(getResponse.data);
    }
  }

  render() {
    return (
      <div className="add-todo">
        <input
          onChange={this.handleInput}
          placeholder="Введите задачу"
          type="text"
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    )
  }
}

export default AddTodo