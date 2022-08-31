import React from "react";
import Navbar from "../components/navbar/Navbar";

import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom"
import Home from "../pages/home/Home";
import About from "../pages/about/About";


const AppRouter = () => {
    return(
        <BrowserRouter>
         
         <Navbar/>
         <Routes>

         
          <Route path="/" exact component = {Home}/>
          <Route path="/about" exact component = {About}/>

         </Routes>
                

               
            

        
        </BrowserRouter>
    )
}
export default AppRouter;