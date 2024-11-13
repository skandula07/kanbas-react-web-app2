import { Navigate, Route, Routes } from "react-router";
import Lab3 from "./Lab 3"; 
import Lab4 from "./Lab 4";
import Lab5 from "./Lab 5";
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
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4 />} />
        <Route path="Lab5/*" element={<Lab5 />} />

      </Routes>

    </div>   
  );
}
