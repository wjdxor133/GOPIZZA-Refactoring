import React from "react";
import banner from "assets/images/banner.gif";
import {
  Loading,
  Header,
  Hero,
  SlideShow,
  Products,
  Feature,
  Footer,
} from "components";
import { productData } from "components/Main/Products/data";
import { useLoading } from "hooks";

const MainPage = () => {
  const { isLoading, onLoading } = useLoading();
  return (
    <>
      <Loading isLoading={isLoading} onLoading={() => onLoading(2000)}>
        <Header />
        <Hero
          title="Greatest Pizza Ever"
          subTitle="1인 피자로 GO! GO!"
          imgBg={banner}
        />
        <SlideShow />
        <Feature />
        <Products heading="고피자의 맛있는 비법!" data={productData} />
        <Footer />
      </Loading>
    </>
  );
};

export default MainPage;
