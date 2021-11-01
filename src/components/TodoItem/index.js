import React from "react";
import "./style.css";

const TodoItem = (props) => {
  return (
    <div className="todoItem">
      <li>
        <p>{props.todo.name}</p>
        <p onClick={() => props.handleDelet(props.todo.id)} className="pX" >  X  </p>
      </li>
    </div>
  );
};

export default TodoItem;
