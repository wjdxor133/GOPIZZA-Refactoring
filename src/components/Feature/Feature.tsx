import React from "react";
import { FeatureContainer, FeatureButton } from "./Feature.styles";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>FIND A GOPIZZA</h1>
      <p>가까운 고피자 매장을 확인해보세요!</p>
      <FeatureButton>매장 찾기</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
