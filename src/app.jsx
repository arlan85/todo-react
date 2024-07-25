import React, { Fragment, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";

export function App(){
  const [todos, setTodos] = useState([{id: uuidv4(), task: "tarea 1", completed: false}]);
  const todoTaskRef = useRef();
  
  const handleTodoAdd = () => {
    const tarea = todoTaskRef.current.value;
    if(tarea === "") return;

    const newTodo = {
      id: uuidv4(),
      task: tarea,
      completed: false
    }

    setTodos((prevTodos)=>{
      return [...prevTodos, newTodo]
    })

    todoTaskRef.current.value = "";
    // setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const hadleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
  <Fragment>
    <TodoList todos={todos} toggleTodo={toggleTodo}/> 
    <input type="text" ref={todoTaskRef} placeholder="Nueva tarea" />
    <button onClick={handleTodoAdd}>Add</button>
    <button onClick={hadleClearCompleted}>Delete</button>
    <div>You have {todos.filter((todo) => !todo.completed).length} left pending to dos</div>
  </Fragment>
)
}