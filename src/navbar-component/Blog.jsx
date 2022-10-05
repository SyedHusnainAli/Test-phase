import React from "react";
import { Link } from "react-router-dom";


function Blog(){

    return(
        <div>
          <li>
              <Link to={"/team"} >Team</Link>
         </li>
                    <h1>blog</h1>
        </div>
    )
}

export default Blog;