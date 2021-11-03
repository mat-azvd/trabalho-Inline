import React from "react";
import { FaBars } from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">inline</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="create">Criar Filas</NavLinks>
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
                </NavBtn>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
