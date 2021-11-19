import styled from "styled-components/";
import { Link as LinkScroll } from "react-scroll";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(35, 63, 120, 1) 57%,
    rgba(0, 155, 255, 1) 100%
  );

  margin-top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 5;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  ${Container}
`;

export const NavLogo = styled.a`
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  justify-content: center;
`;

export const NavIcon = styled(HiOutlineChevronDoubleRight)`
  margin-right: 0.1rem;
`;

export const MobileIcon = styled.div`
  display: block;

  @media screen and (min-width: 280px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-150%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: center;
  text-align: center;
  margin-right: -22px;
  list-style-type: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  text-decoration: none;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #1976d2;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #29c4ec;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

