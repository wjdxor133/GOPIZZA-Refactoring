import React from "react";
import { useDispatch } from "react-redux";
import {
  CartItemWrapper,
  MenuImg,
  CartItemText,
  CartItemTextBox,
  PlusIcon,
  DeleteIcon,
} from "./CartItem.styles";
import { CartItemType } from "types/cart";
import { addItem, removeItem, toggleCartHidden } from "redux/cart/cart";

interface CartItemPropsType {
  cartItem: RemoveCartItem;
}

interface RemoveCartItem extends CartItemType {
  quantity: number;
}

const CartItem = ({ cartItem }: CartItemPropsType) => {
  const { img_url, name, quantity, price } = cartItem;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItem(cartItem));
  };

  return (
    <CartItemWrapper>
      <MenuImg src={img_url} alt={name}></MenuImg>
      <CartItemTextBox>
        <CartItemText>{name}</CartItemText>
        <CartItemText>
          수량: {quantity}
          <PlusIcon onClick={() => dispatch(toggleCartHidden)} />
        </CartItemText>
        <CartItemText>{price * quantity}원</CartItemText>
        <DeleteIcon onClick={handleDelete} />
      </CartItemTextBox>
    </CartItemWrapper>
  );
};

export default CartItem;
