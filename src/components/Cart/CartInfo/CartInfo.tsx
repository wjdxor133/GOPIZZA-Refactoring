import React from "react";
import {
  CartInfoWrapper,
  CartInfoContents,
  CartInfoTitle,
  TextWrapper,
  CartInfoText,
} from "./CartInfo.styles";
import { PaymentButton } from "components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "store/cart/cartSelectors";

const CartInfo = ({ total }: any) => {
  const discountAmount = (total * 20) / 100;
  const totalAmount = (total - discountAmount).toLocaleString("ko-KR");
  return (
    <CartInfoWrapper>
      <CartInfoContents>
        <CartInfoTitle>결제금액</CartInfoTitle>
        <TextWrapper>
          <CartInfoText>결제 금액</CartInfoText>
          <CartInfoText>{`${total.toLocaleString("ko-KR")} 원`}</CartInfoText>
        </TextWrapper>
        <TextWrapper>
          <CartInfoText>총 할인 금액</CartInfoText>
          <CartInfoText>
            {total > 40000
              ? `- ${discountAmount.toLocaleString("ko-KR")} 원`
              : "0 원"}
          </CartInfoText>
        </TextWrapper>
      </CartInfoContents>
      <PaymentButton total={totalAmount} />
    </CartInfoWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CartInfo);
