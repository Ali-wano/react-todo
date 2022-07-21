import React from 'react';
import Todolist from './todolist';
const Todo = ({ text, todos, setTodos, todosFilter }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todosFilter.map((todo) => (
          <Todolist key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />
        )

        )}
      </ul>
    </div>
  )
}
export default Todo