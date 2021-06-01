import React from "react";
import { MenuNavWrapper, MenuNav, MenuText } from "./Menubar.styles";

interface MenuBarProps {
  menuType: string;
  onChangeMenuList: (type: string) => void;
}

function MenuBar({ menuType, onChangeMenuList }: MenuBarProps) {
  const menuTextObj = {
    all: "ALL",
    pizza: "PIZZA",
    pasta_pilaf: "PASTA & PILAF",
    flexBox: "FLEX BOX",
    side_dessert: "SIDE & DESSERT",
    drinks: "DRINKS",
  };

  return (
    <MenuNavWrapper>
      <MenuNav>
        {Object.entries(menuTextObj).map((menuText: string[], idx: number) => {
          const [type, text] = menuText;
          return (
            <MenuText
              className={`${type}`}
              key={idx}
              onClick={() => onChangeMenuList(type)}
              menuType={menuType}
            >
              {text}
            </MenuText>
          );
        })}
      </MenuNav>
    </MenuNavWrapper>
  );
}

export default MenuBar;
