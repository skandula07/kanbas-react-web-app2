import React, { useState } from "react";
import App from "../../App";

export default function Acme() {
    const [n, m] = useState(0);
    const [f, g] = useState(0);
    const d = () => {
      let h = 1;
      for (let i = 1; i <= n; i++) {
        h = h * i;
      }
      g(h);
    };
    return (
      <div>


        {/* <App /> */}


        {/* <button onClick={() => m(n + 1)}> T </button>
        <button onClick={d}> C </button>
        J: {n}
        Q: {f} */}
      </div>
    );
  }
  