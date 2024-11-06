import React, { useState } from "react";
export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  const [x, h] = useState(true);
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="form-control">
        <input type="checkbox" checked={done}
               onChange={() => setDone(!done)} /> Done
      </label>
      {done && <div className="alert alert-success">
               Yay! you are done</div>}
<hr/>


<div>
      <button onClick={() => { h(false); }}>R</button>
      <input type="checkbox" checked={x} onChange={() => h(!x)} id="s" />
      <label htmlFor="s">Q</label>
      {x && <h1>P</h1>}
      {!x && <h1>K</h1>}
    </div>


<hr />






</div>);}