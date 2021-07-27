import React from "react";
import {
  PaymentInfoWrapper,
  PaymentInfoContents,
  PaymentInfoTitle,
  TextWrapper,
  PaymentInfoText,
} from "./PaymentInfo.styles";
import { Payment } from "components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "store/cart/cartSelectors";

const CartInfo = ({ total }: any) => {
  const discountAmount = (total * 20) / 100;
  const totalAmount = (total - discountAmount).toLocaleString("ko-KR");
  return (
    <PaymentInfoWrapper>
      <PaymentInfoContents>
        <PaymentInfoTitle>결제금액</PaymentInfoTitle>
        <TextWrapper>
          <PaymentInfoText>결제 금액</PaymentInfoText>
          <PaymentInfoText>{`${total.toLocaleString(
            "ko-KR"
          )} 원`}</PaymentInfoText>
        </TextWrapper>
        <TextWrapper>
          <PaymentInfoText>총 할인 금액</PaymentInfoText>
          <PaymentInfoText>
            {total > 40000
              ? `- ${discountAmount.toLocaleString("ko-KR")} 원`
              : "0 원"}
          </PaymentInfoText>
        </TextWrapper>
      </PaymentInfoContents>
      <Payment total={totalAmount} />
    </PaymentInfoWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CartInfo);
