import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Kanbas from "../Kanbas";
// import Labs from "./index"; 
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
export default function TOC() {
  return (
    <ul>
      <li><Link to="/Labs">Labs</Link></li>
      <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      <li><a id="wd-k"  href="#/Kanbas">Kanbas</a></li>

    </ul>
  );
}


