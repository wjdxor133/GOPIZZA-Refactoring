import React from 'react';
import bannerSrc from 'assets/videos/banner.mp4';
import {
  BannerBg,
  BannerWrapper,
  BannerContent,
  BannerH1,
  BannerP,
  VideoBg,
} from './Banner.styles';

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerBg>
        <VideoBg autoPlay loop muted src={bannerSrc} />
      </BannerBg>
      <BannerContent>
        <BannerH1>THE NEW</BannerH1>
        <BannerH1>GENERATION</BannerH1>
        <BannerH1>OF PIZZA</BannerH1>
        <BannerP>1인 피자로 GO! GO!</BannerP>
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;
