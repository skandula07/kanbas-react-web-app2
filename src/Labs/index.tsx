import { Navigate, Route, Routes } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";
export default function Labs() {
  return (

    <div id="wd-labs" className="container-fluid">
       <h1>Sree Kandula ☆ CS4550 Section 01</h1>      
   <TOC />

      <h1>Labs</h1>
      
     
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
      </Routes>

    </div>   
  );
}
