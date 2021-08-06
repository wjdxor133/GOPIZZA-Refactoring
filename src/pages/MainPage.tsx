import React from "react";
import { Header, Hero, SlideShow, Products, Feature, Footer } from "components";
import { productData } from "components/Main/Products/data";
import Main from "assets/images/mainBanner.webp.gif";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero
        title="Greatest Pizza Ever"
        subTitle="1인 피자로 GO! GO!"
        imgBg={Main}
      />
      <SlideShow />
      <Feature />
      <Products heading="고피자의 맛있는 비법!" data={productData} />
      <Footer />
    </>
  );
};

export default MainPage;
