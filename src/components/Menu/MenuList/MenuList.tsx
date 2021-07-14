import React, { memo, useState } from "react";
import {
  MenuListWrapper,
  MenuListBox,
  // LoadingBox,
  // LoadingText,
} from "./MenuList.styles";
import { MenuCard } from "components";

import { useSelector } from "react-redux";

import Login from "components/Common/Modal/Login/Login";

import { ToastContainer } from "react-toastify";
import { MenuTypes } from "types/menu";
import { RootState } from "redux/rootReducer";

interface MenuListProps {
  menuData: MenuTypes[];
  // loading: boolean;
}

const MenuList = ({
  // loading,
  menuData,
}: MenuListProps) => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const currentUser = useSelector<RootState>((state) => state.user);

  const showLoginModal = () => {
    if (currentUser === null) {
      setLoginModal(true);
    } else if (currentUser !== null) {
      setLoginModal(false);
    }
  };
  return (
    <MenuListWrapper>
      {loginModal ? (
        <Login showLoginModal={showLoginModal} setLoginModal={setLoginModal} />
      ) : null}
      {/* {loading === true ? (
        <LoadingBox>
          <LoadingText>Loading...</LoadingText>
        </LoadingBox>
      ) : ( */}
      <MenuListBox>
        {menuData &&
          Object.values(menuData)
            .flat()
            .map((menu, idx) => {
              return <MenuCard menu={menu} key={idx} />;
            })}
      </MenuListBox>
      {/* )} */}
      <ToastContainer />
    </MenuListWrapper>
  );
};

export default memo(MenuList);
