import React from "react";
import { Link } from "react-router-dom";


function Linked(){

    return(
        <div>
          <li>
              <Link to={"/linked"} >Team</Link>
         </li>
                    <h1>Linked</h1>
        </div>
    )
}

export default Linked;