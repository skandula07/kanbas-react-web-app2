import React from "react";
// import './App.css';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Sree Kandula ☆ CS4550 Section 01</h1>        

        <HashRouter>
          <Link to="/Labs">Labs</Link> &nbsp;|&nbsp;<Link to="/Kanbas">Kanbas</Link>&nbsp;|&nbsp; <a href="https://github.com/skandula07/kanbas-react-web-app2/tree/a1"> GitHub Repo</a>
          <br />
          <br />
          <hr />
          <br />
          


   <div>
    <Routes>
    <Route path="/" element={<Navigate to="Labs"/>}/>

     <Route path="/Labs/*" element={<Labs />} />
     {/* <Route path="/Kanbas" element={<Kanbas />} /> */}
     <Route path="/Kanbas/*" element={<Kanbas />} />

     
    </Routes>
   </div>
  </HashRouter>
      </div>
    </div>
  );
}

export default App;
