import React from "react";
import ImgBg from "assets/images/video_1.gif";
import { Header, Hero, SlideShow, Products, Feature, Footer } from "components";
import { productData } from "components/Main/Products/data";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero
        title="Greatest Pizza Ever"
        subTitle="1인 피자로 GO! GO!"
        imgBg={ImgBg}
      />
      <SlideShow />
      <Feature />
      <Products heading="고피자의 맛있는 비법!" data={productData} />
      <Footer />
    </>
  );
};

export default MainPage;