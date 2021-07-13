import React, { useRef, useState } from "react";
import {
  MenuCardWrapper,
  CardContents,
  MenuImg,
  MenuName,
  MenuSubName,
  KcalText,
  HoverContents,
  HoverName,
  HoverSubName,
  HoverWrapper,
  PriceText,
  CartIcon,
  CartBtn,
} from "./MenuCard.styles";
import { toast } from "react-toastify";
import { useHover } from "hooks";

import { connect, useDispatch } from "react-redux";
import { addItem } from "redux/cart/cart";

interface MenuCardProps {
  menu: Menu;
  currentUser: firebase.User | null;
}

interface Menu {
  id: number;
  name: string;
  en_name: string;
  kcal: number;
  tag_text: string;
  img_url: string;
  price: number;
}

function MenuCard({ menu, currentUser }: MenuCardProps) {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const Bounce = require("react-reveal/Bounce");
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const showLoginModal = () => {
    if (currentUser === null) {
      alert("로그인 해주세요!");
      setLoginModal(true);
    }
  };

  return (
    <MenuCardWrapper ref={hoverRef}>
      {isHover ? (
        <HoverContents>
          <HoverWrapper>
            <Bounce>
              <HoverName>{menu.name}</HoverName>
            </Bounce>
            <Bounce>
              <HoverSubName>{menu.tag_text}</HoverSubName>
              <PriceText>{`${menu.price}원`}</PriceText>
            </Bounce>

            <Bounce bottom>
              <CartBtn
                onClick={() => {
                  showLoginModal();
                  dispatch(addItem(menu));
                  if (currentUser !== null) {
                    console.log("확인");
                    toast(`${menu.name} 추가!`, {
                      position: "bottom-center",
                      autoClose: 1500,
                    });
                  }
                }}
              >
                <CartIcon />
                장바구니 추가
              </CartBtn>
            </Bounce>
          </HoverWrapper>
        </HoverContents>
      ) : (
        <CardContents>
          <MenuImg src={menu.img_url} />
          <MenuName>{menu.name}</MenuName>
          <MenuSubName>{menu.en_name}</MenuSubName>
          <KcalText>{`${menu.kcal} kcal`}</KcalText>
        </CardContents>
      )}
    </MenuCardWrapper>
  );
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuCard);
