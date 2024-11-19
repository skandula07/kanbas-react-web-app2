import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  // const removeTodo = async (todo: any) => {
  //   const updatedTodos = await client.removeTodo(todo);
  //   setTodos(updatedTodos);
  // }npm;
  // const createTodo = async () => {
  //   const todos = await client.createTodo();
  //   setTodos(todos);
  // };
  const postTodo = async () => {
    const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false, });
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (todo: any) => {
    await client.deleteTodo(todo);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };






  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>Todos
      {/* <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3" /> */}
      <FaPlusCircle onClick={postTodo}   className="text-primary float-end fs-3 me-3" id="wd-post-todo"   />

      </h4>
      
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              className="form-check-input me-2"
              defaultChecked={todo.completed}
            />
               {/* <FaTrash onClick={() => removeTodo(todo)} className="text-danger float-end mt-1"/> */}
               <FaTrash onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
          </li>
        ))}{" "}
      </ul>{" "}
      <hr />{" "}
    </div>
  );
}
