import React from "react";
import styled from "styled-components";
import { IoPizzaOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import {
  Loading,
  Header,
  Hero,
  PaymentInfo,
  CartList,
  Footer,
} from "components";
import { RootState } from "store/type";
import { useLoading } from "hooks";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartLength = useSelector<RootState>(
    (state) => state.cart.cartItems.length
  );
  const { isLoading, onLoading } = useLoading();

  return (
    <>
      <Loading isLoading={isLoading} onLoading={onLoading}>
        <Header />
        <Hero
          title="장바구니"
          subTitle="고피자의 다양한 피자를 주문해 보세요."
          imgBg="https://gopizza.kr/wp-content/uploads/2021/05/pizza.png"
        />
        <Main>
          {cartLength !== 0 ? (
            <Section>
              <CartList cartItems={cartItems} />
              <PaymentInfo />
            </Section>
          ) : (
            <NoticeText>
              <IoPizzaOutline />
              {""} 장바구니가 비어있습니다.
            </NoticeText>
          )}
        </Main>
        <Footer />
      </Loading>
    </>
  );
};

export default CartPage;

const Main = styled.main`
  width: 90%;
  margin: 1em auto;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 60% auto;
  grid-gap: 60px;
  margin: 60px auto;

  @media ${({ theme }) => theme.screenSizes.tablet} {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
`;

const NoticeText = styled.h1`
  font-size: 32px;
  text-align: center;
  margin: 20vh 0;
`;
