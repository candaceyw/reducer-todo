import React, { Component } from 'react';

class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
          item: ''
        };
      }

      handleChanges = e => {
          //update state wtih each keystroke
        // this.setState({ [e.target.name]: e.target.value })
          this.setState({ item: e.target.value })
      }

      //class property to submit form
    submitItem = e => {
    e.preventDefault();
    this.props.addTodo(e, this.state.item);
    this.setState({ item: '' })
  }

  clearSelected = e => {
    e.preventDefault();
    console.log('Clear selected');
    this.props.filterCompleted();
  }

      render(){
    return (
        <div>
           <form onSubmit={this.submitItem}>
                <label htmlFor="item">New To Do: </label>
                <input 
                type="text" 
                name="item" 
               
                value={this.state.item}
                onChange={this.handleChanges}/>
                <button> add </button>
               
           </form>
        </div>
    )
}
}

export default TodoForm;