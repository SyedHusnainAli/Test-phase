import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./navbar-component/contact";
import About from './navbar-component/about'
import Blog from './navbar-component/Blog'
import Dorsin from './navbar-component/dorsin'
import Pricing from './navbar-component/pricing'


import Home from './navbar-component/Home'

function App_Navbar(){
return(
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/dorsin" element={<Dorsin/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
 
   
</Routes>
)

}

  export default App_Navbar ;