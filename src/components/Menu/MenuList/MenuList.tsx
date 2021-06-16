import React, { useState } from "react";
import {
  MenuListWrapper,
  MenuListBox,
  LoadingBox,
  LoadingText,
} from "./MenuList.styles";
import { MenuCard } from "components";

import { connect } from "react-redux";

import Login from "components/Common/Modal/Login/Login";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addItem } from "redux/cart/cartActions";

interface MenuListProps {
  menuData: Menu[];
  // loading: boolean;
  currentUser: firebase.User | null;
  addItem: (item: Menu) => void;
}

export interface Menu {
  id: number;
  name: string;
  en_name: string;
  tag_text: string;
  kcal: number;
  img_url: string;
  price: number;
}

const MenuList = ({
  menuData,
  // loading,
  currentUser,
  addItem,
}: MenuListProps) => {
  const [loginModal, setLoginModal] = useState<boolean>(false);

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
              // return (
              //   <MenuItem key={menu.id}>
              //     <img src={`${menu.img_url}`} alt=" "></img>
              //     <p>{menu.name}</p>
              //     <p>{menu.en_name}</p>
              //     <p>{menu.price}원</p>
              //     <p>#{menu.tag_text}</p>
              //     <button
              //       onClick={() => {
              //         showLoginModal();
              //         addItem(menu);
              //         if (currentUser !== null)
              //           toast(`${menu.name} 추가!`, {
              //             position: "bottom-center",
              //             autoClose: 1500,
              //           });
              //       }}
              //     >
              //       장바구니 추가
              //     </button>
              //   </MenuItem>
              // );
            })}
      </MenuListBox>
      {/* )} */}
      <ToastContainer />
    </MenuListWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
