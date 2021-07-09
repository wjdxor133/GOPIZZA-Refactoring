import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Header, Hero, PaymentInfo, CartList } from "components";
import ImgBg from "assets/images/featured.jpg";
import Footer from "components/Common/Footer/Footer";
import CheckOutItem from "containers/CheckOutItem/CheckOutItem";
import Payment from "containers/Payment/Payment";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

const Checkout = ({ history, cartItems, total }: any) => {
  const goBackMenuPage = () => {
    history.push("/menu");
  };

  return (
    <>
      <Header />
      <Hero title="장바구니" subTitle="1인 피자로 GO! GO!" imgBg={ImgBg} />
      {/* <CheckoutTitle>주문 메뉴 정보</CheckoutTitle> */}

      <Main>
        {/* <CheckoutContent> */}
        <CartList cartItems={cartItems} />
        {/* <PriceTextBox>
              <PriceText>합계</PriceText>
              <PriceText>총 가격: {total}원</PriceText>
            </PriceTextBox> */}
        {/* </CartList> */}
        <PaymentInfo />

        {/* </CheckoutContent> */}

        {/* <BtnBox>
          <MenuAddBtn onClick={goBackMenuPage}>메뉴추가</MenuAddBtn>
          <CheckoutBtn>
            <Payment total={total} />
          </CheckoutBtn>
        </BtnBox> */}
      </Main>
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);

const CheckoutComponent = styled.div`
  width: 100%;
`;

const Main = styled.main`
  width: 80%;
  display: grid;
  grid-template-columns: 60% auto;
  grid-gap: 60px;
  margin: 1em auto;
`;

const CheckoutTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  /* text-align: center; */
  margin: 1em auto;
`;

const CheckoutList = styled.ul`
  width: 100%;
  border-bottom: 1px solid #000;
`;

const PriceTextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceText = styled.p`
  text-align: right;
  font-size: 2rem;
  margin: 1em 0;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;
`;

const MenuAddBtn = styled.p`
  padding: 1.5em 10em;
  font-weight: 300;
  border: 1px solid #472c17;
  margin-top: 1em;
  color: #472c17;

  :hover {
    cursor: pointer;
  }
`;

const CheckoutBtn = styled.p`
  padding: 1.5em 10em;
  font-weight: 300;
  color: white;
  background-color: #472c17;
  margin-top: 1em;

  :hover {
    cursor: pointer;
  }
`;
