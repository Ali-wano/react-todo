import React from "react";
const Todolist = ({text, todo, todos, setTodos})=>{
    const deleteBtn = ()=>{
        setTodos(todos.filter((el)=> el.id !== todo.id))
    }
    const completeBtn = ()=>{
        setTodos(todos.map((item)=>{
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeBtn}><i className="fa fa-check"></i></button>
            <button className="trash-btn" onClick={deleteBtn}><i  className="fa fa-trash"></i></button>
        </div>
    )
}
export default Todolist;