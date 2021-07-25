import React from "react";
import {
  CartListBtn,
  CartListTitle,
  CartListWrapper,
  TitleWrapper,
} from "./CartList.styles";
import { CartItem } from "components";
import { clearItem } from "store/cart/cart";
import { useDispatch } from "react-redux";

const CartList = ({ cartItems }: any) => {
  const dispatch = useDispatch();
  return (
    <CartListWrapper>
      <TitleWrapper>
        <CartListTitle>주문 메뉴 정보</CartListTitle>
        <CartListBtn onClick={() => dispatch(clearItem())}>
          전체 삭제
        </CartListBtn>
      </TitleWrapper>
      {cartItems.map((cartItem: any) => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />;
      })}
    </CartListWrapper>
  );
};

export default CartList;
