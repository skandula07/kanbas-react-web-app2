import { useState } from "react";

const REMOTE_SERVER
       = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({id: "1"});

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>
        Get Todos </a><hr/>
        <h4>Retrieving an Item from an Array by ID</h4>
  <a className="btn btn-primary float-end"
     href={`${API}/${todo.id}`}>
    Get Todo by ID </a>
  <input defaultValue={todo.id} className="form-control w-50"
    onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
  <hr />
  <h4>Filtering Array Items</h4>
  <a className="btn btn-primary"
     href={`${API}?completed=true`}>
    Get Completed Todos
  </a><hr/>

  <h4>Creating new Items in an Array</h4>
  <a className="btn btn-primary"
     href={`${API}/create`}>
    Create Todo
  </a><hr/>


    </div> );}