import React from "react";
import { Link } from "react-router-dom";


function Pricing(){

    return(
        <div>
               <h1>pricing its</h1>
               <li>
              <Link to={"/pricing"} >Pricing</Link>
             </li>
        </div>
    )
}

export default Pricing;