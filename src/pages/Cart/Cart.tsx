import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Header, Hero, PaymentInfo, CartList, Footer } from "components";
import ImgBg from "assets/images/featured.jpg";

import { RootState } from "redux/type";

const Checkout = () => {
  const cartItems = useSelector<RootState>((state) => state.cart.cartItems);

  return (
    <>
      <Header />
      <Hero title="장바구니" subTitle="1인 피자로 GO! GO!" imgBg={ImgBg} />
      <Main>
        <CheckoutTitle>주문 메뉴 정보</CheckoutTitle>
        <Section>
          <CartList cartItems={cartItems} />
          <PaymentInfo />
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default Checkout;

const Main = styled.main`
  width: 80%;
  margin: 1em auto;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 60% auto;
  grid-gap: 60px;
`;

const CheckoutTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  /* text-align: center; */
  margin: 1em auto;
`;
