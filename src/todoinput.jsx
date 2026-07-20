import React, { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      className="todo-input"
      placeholder="¿Qué hay que hacer?"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default TodoInput;

