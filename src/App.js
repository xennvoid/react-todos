import React, { useEffect, useState } from "react";
import './App.css';
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

function App() {

  const [todos,setTodos] = useState(() => getTodosFromLocalStorage())
  const [filterStatus,setFilterStatus] = useState('all')
  const [filteredTodos,setFilteredTodos] = useState([])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  useEffect(() => {
    filterTodos()
    // eslint-disable-next-line
  },[todos,filterStatus])

  function filterTodos() {
    switch(filterStatus){
      case 'all':
        setFilteredTodos([...todos]);
        break;
      case 'completed':
        setFilteredTodos([...todos].filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos([...todos].filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos([...todos]);
        break;
    }
  }

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
          <AddTodo todos={todos} setTodos={setTodos} setFilterStatus={setFilterStatus}/>
          <TodosList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </div>
    </div>
  );
}

export default App;
