import React, { useState, useEffect } from "react";
import { MenuCard } from "components";

import { connect } from "react-redux";

import styled from "styled-components";
import Login from "components/Modal/Login/Login";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addItem } from "redux/cart/cartActions";

interface MenuListProps {
  menuData: MenuListTypes[];
  loading: boolean;
  currentUser: firebase.User | null;
  addItem: (item: MenuListTypes) => void;
}

interface MenuListTypes {
  id: number;
  name: string;
  en_name: string;
  tag_text: string;
  img_url: string;
  price: number;
}

const MenuList = ({
  menuData,
  loading,
  currentUser,
  addItem,
}: MenuListProps) => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showLoginModal = () => {
    if (currentUser === null) {
      setLoginModal(true);
    } else if (currentUser !== null) {
      setLoginModal(false);
    }
  };
  console.log("menuData", Object.values(menuData).flat());
  return (
    <MenuListComponent>
      {loginModal ? (
        <Login showLoginModal={showLoginModal} setLoginModal={setLoginModal} />
      ) : null}
      {loading === true ? (
        <LoadingBox>
          <LoadingText>Loading...</LoadingText>
        </LoadingBox>
      ) : (
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
      )}
      <ToastContainer />
    </MenuListComponent>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);

const MenuListComponent = styled.div`
  width: 100%;
  background-color: #f6f6f6;
`;

const MenuListBox = styled.ul`
  width: 80%;
  /* display: flex;
  flex-flow: row wrap; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
  grid-gap: 30px;
  padding: 30px 0;
`;

const LoadingBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const LoadingText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  opacity: 0.5;
  padding: 3em;
`;

const MenuItem = styled.li`
  /* width: 20%; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 3em;
  margin-bottom: 1.5em;
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  img {
    width: 100%;
    margin-bottom: 1em;
  }
  p {
    margin: 0.4em 0;
    :nth-child(2) {
      font-weight: bold;
    }

    :nth-child(5) {
      font-size: 0.85rem;
    }
  }
  button {
    background-color: #472c17;
    color: white;
    margin-top: 1em;
    padding: 1em;
    font-weight: bold;
    border-radius: 3px;

    :hover {
      cursor: pointer;
    }
  }
`;