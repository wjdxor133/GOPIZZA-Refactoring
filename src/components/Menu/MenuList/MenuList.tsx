/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import { MenuCard } from 'components';
import { MenuTypes } from 'types/menu.types';
import { MenuListWrapper, MenuListBox } from './MenuList.styles';

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
