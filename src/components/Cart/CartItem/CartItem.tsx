import React from "react";
import {
  CartItemBox,
  CartItemWrapper,
  MenuImg,
  CartItemText,
  CartItemTextBox,
} from "./CartItem.styles";

interface CartItemPropsType {
  cartItem: CartItemPropsMemberType;
}

interface CartItemPropsMemberType {
  name: string;
  img_url: string;
  price: number;
  quantity: number;
}

const CartItem = ({
  cartItem: { name, img_url, price, quantity },
}: CartItemPropsType) => {
  return (
    <CartItemWrapper>
      {/* <CartItemBox> */}
      <MenuImg src={img_url} alt={name}></MenuImg>
      <CartItemTextBox>
        <CartItemText>{name}</CartItemText>
        <CartItemText>수량: {quantity}</CartItemText>
        <CartItemText>{price * quantity}원</CartItemText>
      </CartItemTextBox>
      {/* </CartItemBox> */}
    </CartItemWrapper>
  );
};

export default CartItem;
