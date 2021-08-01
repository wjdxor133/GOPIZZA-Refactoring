import React from "react";
import {
  CartListBtn,
  CartListTitle,
  CartListWrapper,
  TitleWrapper,
} from "./CartList.styles";
import { CartItem, Modal } from "components";
import { clearItem } from "store/cart/cart";
import { useDispatch } from "react-redux";
import { useModal } from "hooks";

const CartList = ({ cartItems }: any) => {
  const { isShown, toggle } = useModal();
  const dispatch = useDispatch();

  const handleShowModal = () => {
    toggle();
  };

  const handleClearFromCart = () => {
    dispatch(clearItem());
  };

  return (
    <CartListWrapper>
      <TitleWrapper>
        <CartListTitle>주문 메뉴 정보</CartListTitle>
        <CartListBtn onClick={handleShowModal}>비우기</CartListBtn>
      </TitleWrapper>
      {cartItems.map((cartItem: any) => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Modal
        isShown={isShown}
        hide={toggle}
        contentText="메뉴를 모두 비우시겠습니까?"
        buttonText="비우기"
        onClick={handleClearFromCart}
      />
    </CartListWrapper>
  );
};

export default CartList;
