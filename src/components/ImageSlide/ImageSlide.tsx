import React, { useState } from "react";
import {
  ImageSlideWrapper,
  CenterDiv,
  HoverDiv,
  SearchIcon,
  RouteBtn,
  MenuImg,
  MenuName,
  SubMenuName,
  HoverMenuName,
  HoverMenuSubName,
} from "./ImageSlide.styles";

interface ImageSlideProp {
  menu: MenuDataTypes;
}

interface MenuDataTypes {
  name: string;
  en_name: string;
  img: string;
}

function ImageSlide({ menu }: ImageSlideProp) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleViewMenuInfo = () => {
    setIsHover(!isHover);
  };
  return (
    <ImageSlideWrapper>
      {isHover ? (
        <HoverDiv onMouseLeave={handleViewMenuInfo}>
          <HoverMenuName>{menu.name}</HoverMenuName>
          <HoverMenuSubName>{menu.en_name}</HoverMenuSubName>
          <RouteBtn>
            <SearchIcon />
            이동 하기
          </RouteBtn>
        </HoverDiv>
      ) : (
        <CenterDiv onMouseEnter={handleViewMenuInfo}>
          <MenuImg src={menu.img} alt=" " />
          <MenuName>{menu.name}</MenuName>
          <SubMenuName>{menu.en_name}</SubMenuName>
        </CenterDiv>
      )}
    </ImageSlideWrapper>
  );
}

export default ImageSlide;
