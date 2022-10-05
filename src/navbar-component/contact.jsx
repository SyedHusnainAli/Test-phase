import React from "react";
import { Link } from "react-router-dom";


function Contact(){

    return(
        <div>
            
            <h1>contact its</h1>
            <li>
              <Link to={"/site"} >Contact</Link>
             </li>
        </div>
    )
}

export default Contact;