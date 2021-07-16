import React from "react";
import {
  PaymentInfoWrapper,
  PaymentInfoContents,
  PaymentInfoTitle,
  // PaymentBtn,
} from "./PaymentInfo.styles";
import { Payment } from "components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "store/cart/cartSelectors";

const CartInfo = ({ total }: any) => {
  return (
    <PaymentInfoWrapper>
      <PaymentInfoContents>
        <PaymentInfoTitle>결제금액</PaymentInfoTitle>
        <p>결제 금액</p>
        <p>총 할인 금액</p>
      </PaymentInfoContents>
      <Payment total={total} />
    </PaymentInfoWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CartInfo);
