import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
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
import { Modal } from "components";
import { toast } from "react-toastify";
import { useHover, useModal } from "hooks";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/type";
import { addItem } from "store/cart/cart";

interface MenuCardProps {
  menu: Menu;
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

function MenuCard({ menu }: MenuCardProps) {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const { isShown, toggle } = useModal();
  const Bounce = require("react-reveal/Bounce");
  const history = useHistory();

  const currentUser = useSelector<RootState>((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleShowLoginModal = () => {
    if (currentUser === null) {
      toggle();
    } else {
      dispatch(addItem(menu));
      toast(`${menu.name} 추가!`, {
        position: "bottom-center",
        autoClose: 1500,
      });
    }
  };

  const handleMoveLoginPage = async () => {
    toggle();
    setTimeout(() => {
      history.push("/login");
    }, 100);
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
              <CartBtn onClick={handleShowLoginModal}>
                <CartIcon />
                장바구니
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
      <Modal
        isShown={isShown}
        hide={toggle}
        contentText="로그인 해주세요!"
        buttonText="로그인"
        onClick={handleMoveLoginPage}
      />
    </MenuCardWrapper>
  );
}

export default MenuCard;
