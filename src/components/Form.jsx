import React from "react";
const Form = ({inputValue, setInputValue, todos, setTodos, setStatus})=>{
    const inputValueHandler = (e) =>{
        console.log(e.target.value);
        setInputValue(e.target.value)
    }
    const submitTodoHandler = (e) =>{
      e.preventDefault();
      setTodos(
        [
          ...todos, {text: inputValue, completed: false, id: Math.random() * 1000}
        ]
      )
      setInputValue("")
    }
    const statusHandler = (e) =>{
      setStatus(e.target.value)
    }
return(
    <form>
    <input type="text" className="todo-input" onChange={inputValueHandler} value={inputValue} />
    <button className="todo-button" type="submit" onClick={submitTodoHandler}>
      <i className="fa fa-plus-square"></i>
    </button>
    <div className="select">
      <select name="todos" className="filter-todo" onChange={statusHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
)
}
export default Form