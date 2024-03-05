import React, { useState } from "react";
import "./todo.css";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    const newTodo = { text: inputValue, completed: false };
    if (inputValue !== "") setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleCheck = (index) => {
    const newTodos = todos.map((todo, todoIndex) =>
      index === todoIndex ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholer="할 일을 적어주세요."
      />
      <button type="submit" onClick={addTodo}>
        추가
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(index)}
            />
            <span className={todo.completed ? "completedTodo" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <ul></ul>
    </>
  );
}

export default TodoList;
