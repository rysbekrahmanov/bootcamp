import React, { Component } from "react";
import axios from 'axios';
import './Book.css';

class Book extends Component {
  handleDelete = async id => {
    const response = await axios.delete(`http://localhost:8000/list/${id}`)
    if(response.status >= 200 &&  response.status < 300){
      this.props.update()
    }
  }

  render() {
    return (
      <ul className="contact-book">
        {this.props.data.map((item) => (
          <li 
            key={item.id}
            className="contact-item"
          >
            <div>{item.name}</div>
            <div className="last">{item.lastName}</div>
            <div>{item.phone}</div>
            <button className="btn_1" onClick={e => this.handleDelete(item.id)}>Delete</button>
            <button className="btn_2" onClick={() => this.props.handleModalShow(item.id)}>Edit</button>

          </li>
        ))}
      </ul>
    );
  }
}

export default Book;