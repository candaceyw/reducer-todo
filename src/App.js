import React, { useReducer, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import './components/Todo.css';

import { todoReducer, initialState } from './reducers/index';

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('state')) {
      const localState = localStorage.getItem('state')
      const parsed = JSON.parse(localState);
      console.log(parsed)
      refreshState(parsed)
    }
  }, [])


  // class App extends React.Component {
  const [{ items }, dispatch] = useReducer(todoReducer, initialState);
  // const [todo, setTodo] = useState([]);
  const refreshState = (items)=> dispatch({type: "REFRESH_ITEMS", payload: items})
  // const addTodo = item =>  dispatch({ type: 'ADD_TODO', payload: item });

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
      <div className='header'>
        <NavBar />
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
