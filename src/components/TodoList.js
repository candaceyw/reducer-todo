import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div  className="todo-list">
            {props.todo.map(item => (
                item.show &&
                <Todo key={item.id} todo={item} toggleCompleted={props.toggleCompleted} />
            ))}
            <button className="clear-btn" onClick={props.clearTodo}> Clear Completed
      </button>
        </div>
    )
}

export default TodoList;