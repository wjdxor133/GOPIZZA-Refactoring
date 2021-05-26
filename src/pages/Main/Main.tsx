import React from "react";
import styled from "styled-components";
import HeaderImg from "assets/images/HeaderImg.png";
import SlideShow from "components/SlideShow/SlideShow";

import { Hero, Products, Feature, Footer } from "components";
import { productData, productDataTwo } from "components/Products/data";

type MainPropsType = {
  img: string;
};

const Main = ({ history }: any) => {
  const gotoMap = () => {
    history.push("/Map");
  };
  return (
    <>
      <Hero />
      {/* <ImgContainer>
        <img src={HeaderImg} alt="HeaderImg.png" />
      </ImgContainer> */}
      {/* <Products heading="고퀄1인피자 고피자" data={productData} /> */}
      <SlideShow />
      <Feature />
      <Products heading="고피자의 맛있는 비법!" data={productDataTwo} />
      <Footer />
    </>
  );
};

// const ImgContainer = styled.div`
//   width: 100%;
//   padding: 50px 0 50px 0;
//   img {
//     width: 40%;
//     margin: 0 auto;
//   }
// `;

export default Main;
