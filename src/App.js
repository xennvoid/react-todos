import React, { useCallback, useEffect, useState } from "react";
import './App.css';
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import Switch from "react-switch";
import useTheme from "./hooks/useTheme";

function App() {

  const [todos, setTodos] = useState(() => getTodosFromLocalStorage())
  const [filterStatus, setFilterStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  const [checked, setChecked] = useState(false)
  const { theme, toggleTheme } = useTheme()


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const filterTodos = useCallback(() => {
    switch (filterStatus) {
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
  }, [todos, filterStatus])

  useEffect(() => {
    filterTodos()
    // eslint-disable-next-line
  }, [todos, filterStatus])


  function getTodosFromLocalStorage() {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  }

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Switch
          checked={checked}
          onChange={() => {
            toggleTheme()
            setChecked(prev => !prev)
          }}
          onColor="#858585"
          onHandleColor="#201d1c"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        <AddTodo todos={todos} setTodos={setTodos} setFilterStatus={setFilterStatus} />
        <TodosList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
    </div>
  );
}

export default App;
