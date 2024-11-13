import React from "react";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (

  

        <HashRouter>
        <Provider store={store}>

          <Link to="/Labs">Labs</Link> &nbsp;|&nbsp;<Link to="/Kanbas">Kanbas</Link>
          <br />
          <br />
        

   <div>
    <Routes>
    <Route path="/" element={<Navigate to="Kanbas"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     {/* <Route path="/Kanbas" element={<Kanbas />} /> */}
     <Route path="/Kanbas/*" element={<Kanbas />} />  
    </Routes>
   </div>
   </Provider>

  </HashRouter>
  );
}

export default App;
