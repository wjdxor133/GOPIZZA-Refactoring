import React from "react";
import { useDispatch } from "react-redux";
import {
  CartItemWrapper,
  MenuImg,
  CartItemInfoBox,
  CartItemInfo,
  CartItemText,
  MinusIcon,
  PlusIcon,
  DeleteIcon,
} from "./CartItem.styles";
import { CartItemType } from "types/cart";
import { removeItem, addItem, clearItemFromCart } from "store/cart/cart";

interface CartItemPropsType {
  cartItem: RemoveCartItem;
}

interface RemoveCartItem extends CartItemType {
  quantity: number;
}

const CartItem = ({ cartItem }: CartItemPropsType) => {
  const { img_url, name, quantity, price } = cartItem;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(cartItem));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(cartItem));
  };

  return (
    <CartItemWrapper>
      <MenuImg src={img_url} alt={name}></MenuImg>
      <CartItemInfoBox>
        <CartItemInfo width="40">
          <CartItemText>{name}</CartItemText>
        </CartItemInfo>
        <CartItemInfo width="20">
          <MinusIcon onClick={handleRemoveItem} />
          <CartItemText>{quantity}</CartItemText>
          <PlusIcon onClick={handleAddItem} />
        </CartItemInfo>
        <CartItemInfo width="20">
          <CartItemText>
            {(price * quantity).toLocaleString("ko-KR")}원
          </CartItemText>
        </CartItemInfo>
        <CartItemInfo width="20">
          <DeleteIcon onClick={() => dispatch(clearItemFromCart(cartItem))} />
        </CartItemInfo>
      </CartItemInfoBox>
    </CartItemWrapper>
  );
};

export default CartItem;
