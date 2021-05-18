import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./Navbar.styles";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">GOPIZZA</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
