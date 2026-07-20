import React, { useState } from "react";
import TodoInput from "./todoinput";
import TodoList from "./todolist";
import "./todostyles.css"; 


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== "") setTodos([...todos, newTodo.trim()]);
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Mis Tareas</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
