import React from "react";
import { CartListWrapper } from "./CartList.styles";
import { CartItem } from "components";

const CartList = ({ cartItems }: any) => {
  return (
    <CartListWrapper>
      {cartItems.map((cartItem: any) => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />;
      })}
    </CartListWrapper>
  );
};

export default CartList;
