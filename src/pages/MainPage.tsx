import React from "react";
import {
  Header,
  SlideShow,
  Products,
  Feature,
  Footer,
  Banner,
} from "components";
import { productData } from "components/Main/Products/data";

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <SlideShow />
      <Feature />
      <Products heading="고피자의 맛있는 비법!" data={productData} />
      <Footer />
    </>
  );
};

export default MainPage;
