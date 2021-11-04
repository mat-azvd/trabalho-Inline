import React from "react";

import {
    Nav,
    NavbarContainer,
    NavLogo,
    // MobileIcon,
    // NavMenu,
    // NavItem,
    // NavLinks,
    // NavBtn,
    // NavBtnLink,
    NavIcon,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Inline
                    <NavIcon />
                </NavLogo>
                {/* <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/create-queue">Criar Fila</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="manage">Gerenciar Filas</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="row">Filas</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about">Sobre</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signup">LOGIN</NavBtnLink>
        </NavBtn> */}
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
