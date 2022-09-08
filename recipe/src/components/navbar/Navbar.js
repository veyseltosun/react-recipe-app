import React from 'react';
import { useState } from 'react';
import { Hamburger, Logo, MenuLink, Nav, Menu } from './NavbarStyle';

const Navbar = () => {
    const [isOpen, setlsOpen] = useState(false);

    function handleMenuClick() {
        setlsOpen((prev) => !prev);
    }

    return (
        <Nav>
            <Logo to="/">
                <i>Veysel's</i>
                <span>recipe</span>
            </Logo>
            <Hamburger onClick={handleMenuClick}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="about">About</MenuLink>
                <a
                    href="https://github.com/veyseltosun"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
                <MenuLink to="login">Logout</MenuLink>
            </Menu>
        </Nav>
    );
};

export default Navbar;
