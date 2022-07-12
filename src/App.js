import React, { useEffect, useState } from "react";
import './App.css';
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

function App() {

  const [todos,setTodos] = useState(() => getTodosFromLocalStorage())

  console.log('render App')
  
  useEffect(() => {
    console.log('todos changing')
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  function getTodosFromLocalStorage () {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  }

  return (
    <div className="app">
        <div className="container">
          <AddTodo todos={todos} setTodos={setTodos}/>
          <TodosList todos={todos} setTodos={setTodos}/>
        </div>
    </div>
  );
}

export default App;
