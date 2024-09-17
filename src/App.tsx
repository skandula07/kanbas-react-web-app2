import React from "react";
// import './App.css';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";

function App() {
  return (
    <div className="App">
      <div>
        <p>Welcome to Web Dev ☆</p>

        <HashRouter>
          <Link to="/Labs">Labs</Link> |  <Link to="/Kanbas">Kanbas</Link>
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
