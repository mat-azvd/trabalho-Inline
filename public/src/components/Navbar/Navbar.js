import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavIcon,
} from "./NavbarElements";
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const history = useHistory();

  function clickNavbar () {
    history.push(`/`);
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="" to="/" onClick={() => clickNavbar()}>
          Inline
          <NavIcon />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
