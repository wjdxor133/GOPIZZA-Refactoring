/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItemType } from 'types/cart.types';
import { removeItem, addItem, clearItemFromCart } from 'store/cart/cart';
import { useToast } from 'hooks';
import {
  CartItemWrapper,
  MenuImg,
  CartItemInfoBox,
  CartItemInfo,
  CartItemText,
  MinusIcon,
  PlusIcon,
  DeleteIcon,
} from './CartItem.styles';

interface CartItemPropsType {
  cartItem: CartItemType;
}

const CartItem = ({ cartItem }: CartItemPropsType) => {
  const { img_url: imgUrl, name, quantity = 1, price } = cartItem;
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleAddItem = () => {
    dispatch(addItem(cartItem));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(cartItem));
    quantity <= 1 && toast(`${name} 삭제!`, 'bottom-center', 1200, 0);
  };

  const handleClearItemFromCart = () => {
    dispatch(clearItemFromCart(cartItem));
    toast(`${name} 삭제!`, 'bottom-center', 1200, 0);
  };

  return (
    <CartItemWrapper>
      <MenuImg src={imgUrl} alt={name} />
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
          <CartItemText>{(price * quantity).toLocaleString('ko-KR')}원</CartItemText>
        </CartItemInfo>
        <CartItemInfo width="20">
          <DeleteIcon onClick={handleClearItemFromCart} />
        </CartItemInfo>
      </CartItemInfoBox>
    </CartItemWrapper>
  );
};

export default CartItem;
