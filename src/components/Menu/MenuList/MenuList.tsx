import React, { memo } from "react";
import { MenuListWrapper, MenuListBox } from "./MenuList.styles";
import { MenuCard } from "components";
import { MenuTypes } from "types/menu.types";

interface MenuListProps {
  menuData: MenuTypes[];
}

const MenuList = ({ menuData }: MenuListProps) => {
  return (
    <MenuListWrapper>
      <MenuListBox>
        {menuData &&
          Object.values(menuData)
            .flat()
            .map((menu, idx) => {
              return <MenuCard menu={menu} key={idx} />;
            })}
      </MenuListBox>
    </MenuListWrapper>
  );
};

export default memo(MenuList);
