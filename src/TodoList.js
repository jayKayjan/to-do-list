import React, { Component } from 'react'                        //importing react

class TodoList extends Component {                                     //creating todolist component
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div>Click on the item to remove it
      <div className="todoListMain">            
        <div className="header">
          <form onSubmit={this.props.addItem}>          
            <input
              placeholder="Task"
              ref={this.props.inputElement}    
              onChange={this.props.handleInput}                 
              value={this.props.currentItem.text}
              
            />                                              
            <button type="submit"> Add Task </button>                          

          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList
