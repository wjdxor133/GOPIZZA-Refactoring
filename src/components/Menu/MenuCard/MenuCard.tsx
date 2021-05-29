import React, { useRef } from "react";
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
import { useHover } from "hooks";

interface MenuCardProps {
  menu: MenuData;
}

interface MenuData {
  id: string;
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
  const Bounce = require("react-reveal/Bounce");

  return (
    <MenuCardWrapper ref={hoverRef}>
      {isHover ? (
        <HoverContents>
          <HoverWrapper>
            <HoverName>{menu.name}</HoverName>
            <HoverSubName>{menu.tag_text}</HoverSubName>
            <PriceText>{`${menu.price}원`}</PriceText>
            <Bounce bottom>
              <CartBtn>
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

export default MenuCard;
