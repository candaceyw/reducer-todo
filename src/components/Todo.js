import React from 'react';
const moment = require("moment");

const Todo = props => {
  return (
    <div
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      <p>{props.todo.name}</p>
  {/* <span>{moment(props.todo.timeCompleted).fromNow() }</span> */}
  <span className="time">{moment.duration(-1, "minutes").locale("en").humanize(true)}</span>

    </div>
  );
};

export default Todo;
