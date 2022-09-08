import React, { Fragment } from "react";
// import { useState } from "react";
import Navbar from "../components/navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Details from "../pages/detail/Details";
import PrivateRouter from "./PrivateRouter";


    // const [isAuth, setIsAuth] = useState(false);

    const AppRouter = () => {
        return (
          < BrowserRouter>
            <Fragment>
              <Navbar/>
              <Routes>
               
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<PrivateRouter Component={Login} />} />
                
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/details' element={<Details/>}/>
               
              </Routes>
            </Fragment>
          </ BrowserRouter>
          
        );
    }

export default AppRouter;
