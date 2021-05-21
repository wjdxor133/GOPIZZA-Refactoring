import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./Navbar.styles";

interface NavbarProps {
  toggle: () => void;
}

function Navbar({ toggle }: NavbarProps) {
  return (
    <>
      <Nav>
        <NavLink to="/">GOPIZZA</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
