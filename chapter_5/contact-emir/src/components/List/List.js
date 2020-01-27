import React from 'react'

import './List.css'

class List extends React.Component{

      render(){
          let list = this.props.data;
          return(
           <ul className="list-ul">
               {list.map((item,index)=>(
                   <li

                   key={index}
                   className="list-item">
                     <p className="list-item-faq">
                         <span className="list-item-name"> 
                          {item.name} </span>
                         <span className="list-item-lastName"> 
                          {item.lastName}
                          </span>
                          <button
                          onClick={()=>{this.props.deleteContact(index)}}
                          className="list-item-delete-btn"
                          >
                           X
                        </button>
                        <button 
                        onClick={()=>this.props.openEdit(index)} 
                        >
                            Edit
                        </button>
                     </p>
                     <span className="list-item-phone">
                         {item.phone}</span>
                   </li>
               ))}
           </ul>
          )
      }
}

export default List;