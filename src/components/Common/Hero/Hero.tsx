import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  // HeroBtn,
} from "./Hero.styles";

export interface HeroProps {
  title: string;
  subTitle: string;
  imgBg: string;
}

function Hero({ title, subTitle, imgBg }: HeroProps) {
  const Fade = require("react-reveal/Fade");
  return (
    <HeroContainer imgBg={imgBg}>
      <HeroContent>
        <Fade bottom>
          <HeroItems>
            <HeroH1>{title}</HeroH1>
            <HeroP>{subTitle}</HeroP>
            {/* <HeroBtn>메뉴보기</HeroBtn> */}
          </HeroItems>
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
