import React from "react";
import { Link } from "react-router-dom";


function Contact(){

    return(
        <div>
          <li>
              <Link to={"/contact"} >contact</Link>
         </li>
                    <h1>contact</h1>
        </div>
    )
}

export default Contact;