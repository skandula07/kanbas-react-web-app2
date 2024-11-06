import { Routes, Route, Link } from "react-router-dom";
import AddPathParameters from "./AddPathParameters";
export default function PathParameters() {
  // const { a, b } = useParams();
 return (
  <div id="wd-path-parameters">
   <h2>Path Parameters</h2>
   <Link to="/Labs/Lab3/add/1/2">1 + 2</Link> <br />
   <Link to="/Labs/Lab3/add/3/4">3 + 4</Link>
   <Routes>
     <Route path="add/:a/:b" element={<AddPathParameters />} />
   </Routes>


   {/* {a} + {b} = {parseInt(a as string) + parseInt(b as string)} */}



  </div>);}