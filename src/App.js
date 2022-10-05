import React from "react";
import Navbar from './navbar'
import App_Navbar from "./app_navbar";
import {BrowserRouter as Router } from "react-router-dom";


function App(){

return(
  
    <Router>
   
    <Navbar/>
    < App_Navbar/>
    </Router>
 
)

}

export default App;