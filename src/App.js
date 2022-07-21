import "./App.css";
import Form from "./components/Form";
import Todo from "./components/todo";
import Todolist from "./components/todolist";
import React, { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [todosFilter, setTodosFilter] = useState([]);

  useEffect(()=>{
    getLocalStorage();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalStorage();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setTodosFilter(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setTodosFilter(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setTodosFilter(todos);
        break;
    }
  };
  const saveLocalStorage = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalStorage =()=>{
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem("todos"))
     setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>Wano Todo List React</header>
      <Form
        inputValue={inputValue}
        todos={todos}
        setTodos={setTodos}
        setInputValue={setInputValue}
        status={status}
        setStatus={setStatus}
        todosFilter={todosFilter}
      />
      <Todo todos={todos} setTodos={setTodos} todosFilter={todosFilter} />
    </div>
  );
}

export default App;
