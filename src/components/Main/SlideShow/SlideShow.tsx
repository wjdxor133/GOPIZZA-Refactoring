import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SlideContainer,
  TitleWrapper,
  TitleH1,
  TitleH3,
} from "./SlideShow.styles";
import Slide from "./Slide/Slide";
import { menuData } from "./data";

const SlideShow = () => {
  const Fade = require("react-reveal/Fade");
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <SlideContainer>
      <Fade left>
        <TitleWrapper>
          <TitleH1>느리고, 비싸고, 큰 피자, NO!</TitleH1>
          <TitleH3>
            고퀄1인피자 <p> 고피자</p>가 딱!
          </TitleH3>
        </TitleWrapper>
      </Fade>
      <Slider {...settings}>
        {menuData.map((menu, idx) => {
          return <Slide key={idx} menu={menu} />;
        })}
      </Slider>
    </SlideContainer>
  );
};

export default SlideShow;
