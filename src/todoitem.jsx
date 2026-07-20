import React from "react";

function TodoItem({ todo, index, onDeleteTodo }) {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button className="delete-btn" onClick={() => onDeleteTodo(index)}>
        ✕
      </button>
    </li>
  );
}

export default TodoItem;


