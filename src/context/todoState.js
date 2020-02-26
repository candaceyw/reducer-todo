import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer'


const TodoState = props => {
    const initialState = {
      todo: [],
     
    };
    const [state, dispatch] = useReducer(TodoReducer, initialState);



// Add To do
const setTodo = () => dispatch({ type: ADD_TODO });

// Clear Completed
const clearCompleted = () => dispatch({ type: COMPLETED_TODO })


return (
    <TodoContext.Provider
      value={{
        todo: state.todo,
        setTodo,
        clearCompleted
       
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
    }
    
  export default TodoState;