import React from "react";
import { useState } from "react";
import { Hamburger, Logo, MenuLink, Nav, Menu } from "./NavbarStyle";



const Navbar = () =>{

    const[isOpen, setlsOpen] = useState(false);




    return(
       <Nav>
        <Logo to='/' >
            <i>{"Veysel's "}</i> <span>recipe</span>
        </Logo>
        <Hamburger onClick={() => setlsOpen(!isOpen)}>
            <span/>
            <span/>
            <span/>
        </Hamburger>
          <Menu isOpen={isOpen}>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="https://github.com/veyseltosun">Github</MenuLink>
          <MenuLink to="login">Logout</MenuLink>

        </Menu>
    
       </Nav>
    )
}

export default Navbar;
