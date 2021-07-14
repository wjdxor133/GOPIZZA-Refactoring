import React from "react";
import { CartListWrapper } from "./CartList.styles";
import { CartItem } from "components";

const CartList = ({ cartItems }: any) => {
  console.log("cartItems", cartItems);

  return (
    <CartListWrapper>
      {cartItems.map((cartItem: any) => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />;
      })}
    </CartListWrapper>
  );
};

export default CartList;
