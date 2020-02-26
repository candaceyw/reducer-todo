import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

import { todoReducer, initialState } from './reducers/index';

const App = () => {
  // class App extends React.Component {
  const [{ items }, dispatch] = useReducer(todoReducer, initialState);
  // const [todo, setTodo] = useState([]);

  const addTodo = item => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
      show: true
    };

    dispatch({ type: 'ADD_TODO', payload: newItem });
  };

  const clearTodo = () => {
    dispatch({ type: 'CLEAR_TODO' });
  };

  const toggleCompleted = id => {
    dispatch({ type: 'COMPLETED_TODO', payload: id });
  };

  return (
    <div className='App'>
      {console.log(localStorage)}
      <div className='header'>
        <h1>TO DO LIST</h1>
        <TodoForm addTodo={addTodo} clearTodo={clearTodo} />
        <TodoList
          todo={items}
          toggleCompleted={toggleCompleted}
          clearTodo={clearTodo}
        />
      </div>
    </div>
  );
};

export default App;
