import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Header, Hero, PaymentInfo, CartList, Footer } from "components";

import { RootState } from "store/type";

const Cart = () => {
  const cartItems = useSelector<RootState>((state) => state.cart.cartItems);

  return (
    <>
      <Header />
      <Hero
        title="장바구니"
        subTitle="고피자의 다양한 피자를 주문해 보세요."
        imgBg="https://gopizza.kr/wp-content/uploads/2021/05/pizza.png"
      />
      <Main>
        <Section>
          <CartList cartItems={cartItems} />
          <PaymentInfo />
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default Cart;

const Main = styled.main`
  width: 80%;
  margin: 1em auto;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 60% auto;
  grid-gap: 60px;
  margin: 48px auto;
`;
