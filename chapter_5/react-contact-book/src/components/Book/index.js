import React, { Component } from "react";
import './Book.css'

class Book extends Component {
handleDelete = (index, event) => {
  event.stopPropagation();

  const newData = [...this.props.data];
  newData.splice(index, 1)

  this.props.handleUpdateContactsData(newData);
}

  render() {
    return (
      <ul className="contact-book">
        {this.props.data.map((item, index) => (
          <li 
            key={index}
            className="contact-item"
            onClick={() => this.props.handleModalShow(index)}
          >
            <button onClick={e => this.handleDelete(index, e)}>Delete</button>
            <div>{item.name}</div>
            <div>{item.lastName}</div>
            <div>{item.phone}</div>

          </li>
        ))}
      </ul>
    );
  }
}

export default Book;