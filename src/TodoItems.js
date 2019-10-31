import React, { Component } from 'react'              //importing components

class TodoItems extends Component {                      //creating todoitems component
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>        
  
        {item.text}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>                                   //displays the list inputted
  }
}

export default TodoItems            //exporting the above created component
