
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    setTodo([...todo, text]);
    setText("");
  };
  const handleDelete = (idx) => {
    const newTodo = [...todo];
    newTodo.splice(idx, 1);
    setTodo(newTodo);
  };
  return (
    <div>
        <div className="todo">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Add Todo</button>
      </div>
      <div className="todo-item">
        <ul>
          {todo.map((item, idx) => (
            <li key={idx}>
              {item}{" "}
              <button className="btn" onClick={handleDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
