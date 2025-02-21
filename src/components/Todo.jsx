import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Todo() {
  let [todos, setTodos] = useState([{ task: "sample-Task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  function addNewTask() {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  }
  function updateTask(event) {
    setNewTodo(event.target.value);
  }
  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  }
  function upperCase() {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  }

  function upperCaseOne(id){
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        }else{
          return todo;
        }
      })
    );
  }

  return (
    <>
      <h1>Todo task</h1>
      <input
        placeholder="Add Task"
        type="text"
        value={newTodo}
        onChange={updateTask}
      />
      <br />
      <br />
      <button type="button" onClick={addNewTask}>
        Add task
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} &nbsp;&nbsp;{" "}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>{" "}
            &nbsp;&nbsp;&nbsp;
            <button type="button" onClick={() => {upperCaseOne(todo.id)}}>
              UpperCaseOne
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={upperCase}>
        UpperCaseAll
      </button>
    </>
  );
}
