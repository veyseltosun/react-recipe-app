import React from "react";
import Navbar from "../components/navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";



const AppRouter = () => {
    return(
        <BrowserRouter>
         
         <Navbar/>
         <Routes>

         
          <Route path="/" exact element = {<Home/>}/>
          <Route path="/about" exact element = {<About/>}/>
          <Route path="/login" exact element = {<Login/>}/>
          
          

         </Routes>
                

               
            

        
        </BrowserRouter>
    )
}
export default AppRouter;