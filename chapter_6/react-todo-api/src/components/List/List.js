import React from 'react';
import axios from 'axios';

class List extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchData()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.data !== this.props.data) {
      nextState.data = nextProps.data
    }

    return nextProps.data !== this.props.data || nextState !== this.state
  }

  fetchData = async () => {
    const response = await axios.get('http://localhost:8000/list');

    this.setState({ data: response.data });
  }

  handleChangeStatus = async item => {
    const obj = {
      ...item,
      status: !item.status
    }

    await axios.put(`http://localhost:8000/list/${item.id}`, obj);

    this.fetchData();
  }

  handleDeleteTask = async id => {
    await axios.delete(`http://localhost:8000/list/${id}`);

    this.fetchData();
  }

  render() {
    return (
      <ul>
        {this.state.data.map(item => (
          <li
            style={{ textDecoration: item.status ? 'line-through' : 'none' }}
            key={item.id}
            onClick={() => this.handleChangeStatus(item)}
          >
            {item.text}
            <button onClick={() => this.handleDeleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default List;