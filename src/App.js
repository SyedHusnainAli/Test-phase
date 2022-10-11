import React from "react";
import Navbar from './navbar'
import App_Navbar from "./app_navbar";
import {BrowserRouter as Router } from "react-router-dom";
import './App.css'


function App(){

return(
<Router>
    <div>
         <Navbar/>
         < App_Navbar/>
    </div>
</Router>
)

}

export default App;