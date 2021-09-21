/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import FooterBanner from 'assets/images/footerBanner.webp';
import { useHistory } from 'react-router-dom';
import { FeatureContainer, FeatureButton } from './Feature.styles';

const Feature = () => {
  const Fade = require('react-reveal/Fade');
  const history = useHistory();

  return (
    <FeatureContainer imgBg={FooterBanner}>
      <Fade right>
        <h1>FIND A GOPIZZA</h1>
        <p>가까운 고피자 매장을 확인해보세요!</p>
      </Fade>
      <Fade bottom>
        <FeatureButton onClick={() => history.push('/map')}>매장 찾기</FeatureButton>
      </Fade>
    </FeatureContainer>
  );
};

export default Feature;
