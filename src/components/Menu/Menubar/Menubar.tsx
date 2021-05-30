import React from "react";
import { MenuNavWrapper, MenuNav, MenuText } from "./Menubar.styles";

interface MenuBarProps {
  onChangeMenuList: (type: string) => void;
}

function MenuBar({ onChangeMenuList }: MenuBarProps) {
  const menuTextObj = {
    all: "ALL",
    pizza: "PIZZA",
    pasta_pilaf: "PASTA & PILAF",
    flexbox: "FLEXBOX",
    side_dessert: "SIDE & DESSERT",
    drinks: "DRINKS",
  };
  return (
    <MenuNavWrapper>
      <MenuNav>
        {Object.entries(menuTextObj).map((menuText: string[], idx: number) => {
          const [type, text] = menuText;
          return (
            <MenuText key={idx} onClick={() => onChangeMenuList(type)}>
              {text}
            </MenuText>
          );
        })}
      </MenuNav>
    </MenuNavWrapper>
  );
}

export default MenuBar;
