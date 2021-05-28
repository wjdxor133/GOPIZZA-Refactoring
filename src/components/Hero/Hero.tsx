import React, { useState } from "react";
import { Navbar, Sidebar } from "components";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer imgBg={imgBg}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>{title}</HeroH1>
          <HeroP>{subTitle}</HeroP>
          {/* <HeroBtn>메뉴보기</HeroBtn> */}
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
