import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import './components/Todo.css';

class App extends React.Component {
 
  constructor() {
    super();
    this.state ={
      todo: []
    }
  }

  componentDidMount(){
    console.log('mounted')
    const localStorageList = localStorage.getItem('todoList');
    const list = localStorageList ? JSON.parse(localStorageList):[]
    this.setState({todo: list})
  }

  componentDidUpdate(){
    console.log('updated')
    const stringified = JSON.stringify(this.state.todo)
    console.log(stringified)
    localStorage.setItem('todoList', stringified)
  }

  //Class methods to update State
  addTodo = (e, item )=> {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
      show: true
    }
    this.setState((prevState) => { 
      return {todo: [ ...prevState.todo, newItem ]}
    });
    
  }


  
  toggleCompleted = clickedItem => {
    console.log(clickedItem)

    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === clickedItem) {
          return {
            ...item,
            completed: !item.completed
          };
        } 
          return item;
      })
    });
  };

  handleChanges = (e) => {
    this.setState({ search: e.target.value })
    this.toggleShow(e.target.value);
  }

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };


  render() {
    return (
      <div className="App">
        {console.log(localStorage)}
      <div className="header">
        <h1>TO DO LIST</h1>
        <TodoForm  addTodo={this.addTodo}/>
        <TodoList toggleCompleted={this.toggleCompleted} todo={this.state.todo}
        clearTodo={this.clearTodo} />
      </div>
      </div>
    );
  }
}

export default App;
