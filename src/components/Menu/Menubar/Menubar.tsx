import React from "react";
import { MenuNavWrapper, MenuNav, MenuText } from "./Menubar.styles";

function MenuBar() {
  const menuTextList: string[] = [
    "All",
    "PIZZA",
    "PASTA&PILAF",
    "FLEXBOX",
    "SIDE & DESSERT",
    "DRINKS",
  ];
  return (
    <MenuNavWrapper>
      <MenuNav>
        {menuTextList.map((menuText: string, idx: number) => {
          return <MenuText key={idx}>{menuText}</MenuText>;
        })}
      </MenuNav>
    </MenuNavWrapper>
  );
}

export default MenuBar;
