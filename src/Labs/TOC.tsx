import {Link} from "react-router-dom";
export default function TOC() {
  return (
    <ul>
      <li><Link to="/Labs">Labs</Link></li>
      <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      <li><a id="wd-k"  href="#/Kanbas">Kanbas</a></li>
      <li><a id="wd-github"  href="https://github.com/skandula07/kanbas-react-web-app2">Github</a></li>


    </ul>
  );
}


