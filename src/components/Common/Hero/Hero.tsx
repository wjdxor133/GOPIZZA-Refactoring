/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP } from './Hero.styles';

export interface HeroProps {
  title: string;
  subTitle: string;
  imgBg: string;
}

function Hero({ title, subTitle, imgBg }: HeroProps) {
  const Fade = require('react-reveal/Fade');

  return (
    <HeroContainer imgBg={imgBg}>
      <HeroContent>
        <Fade bottom>
          <HeroItems>
            <HeroH1>{title}</HeroH1>
            <HeroP>{subTitle}</HeroP>
          </HeroItems>
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
