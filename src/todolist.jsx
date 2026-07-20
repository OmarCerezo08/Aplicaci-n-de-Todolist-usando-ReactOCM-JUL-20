import React from "react";
import TodoItem from "./todoitem";

function TodoList({ todos, onDeleteTodo }) {
  if (todos.length === 0) {
    return <p className="todo-empty">No hay tareas, añadir tareas</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
