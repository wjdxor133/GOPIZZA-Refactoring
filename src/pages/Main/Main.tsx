import React from "react";
import { useHistory } from "react-router-dom";

import SlideShow from "components/SlideShow/SlideShow";

import { Hero, Products, Feature, Footer } from "components";
import { productData } from "components/Products/data";

const Main = () => {
  const history = useHistory();
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
      <Products heading="고피자의 맛있는 비법!" data={productData} />
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
