import React, { useState } from "react";
import "./style.css";
import TodoItem from "../TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "play" },
    { id: 2, name: "sleep" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.task.value) {
      const todo = {
        id: todos.length + 1,
        name: e.target.task.value,
      };
      
      setTodos([...todos, todo]);
      e.target.task.value = "";
    }
  };

  const handleDelet = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //   render
  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button>Add Task</button>
      </form>
      <ul>

        {todos.map((todo, i) => (
          <TodoItem todo={todo} key={i} handleDelet={handleDelet} />
        ))}

      </ul>

    </div>
  );
 
};
export default Todo;
