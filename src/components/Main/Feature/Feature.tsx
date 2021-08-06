import React from "react";
import { FeatureContainer, FeatureButton } from "./Feature.styles";
import FooterBanner from "assets/images/footerBanner.jpg";

const Feature = () => {
  const Fade = require("react-reveal/Fade");
  return (
    <FeatureContainer imgBg={FooterBanner}>
      <Fade right>
        <h1>FIND A GOPIZZA</h1>
        <p>가까운 고피자 매장을 확인해보세요!</p>
      </Fade>
      <Fade bottom>
        <FeatureButton>매장 찾기</FeatureButton>
      </Fade>
    </FeatureContainer>
  );
};

export default Feature;
