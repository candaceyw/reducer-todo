import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoForm = (props) => {
  const [item, setItem] = useState('');
  // const [item, setItem] = useLocalStorage(key, initialValue)

  const handleChanges = e => {
    //update state wtih each keystroke
    // this.setState({ [e.target.name]: e.target.value })
    setItem(e.target.value);
  };

  //class property to submit form
  const submitItem = e => {
    e.preventDefault();
    props.addTodo(item);
    setItem('');
  };

  const clearSelected = e => {
    e.preventDefault();
    console.log('Clear selected');
    props.filterCompleted();
  };

  return (
    <div>
      <form onSubmit={submitItem}>
        {/* <label htmlFor='item'>New To Do: </label> */}
        <input type='text' name='item' value={item} onChange={handleChanges} placeholder="Enter New To Do" required/>
        <button> Add New To Do Item </button>
      </form>
    </div>
  );
};

export default TodoForm;
