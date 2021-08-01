import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  SlideWrapper,
  CenterDiv,
  HoverDiv,
  SearchIcon,
  RouteBtn,
  MenuImg,
  MenuName,
  SubMenuName,
  HoverMenuName,
  HoverMenuSubName,
} from "./Slide.styles";

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
  const history = useHistory();

  const handleViewMenuInfo = () => {
    setIsHover(!isHover);
  };

  const handleMovePage = () => {
    history.push("/menu");
  };

  return (
    <SlideWrapper>
      {isHover ? (
        <HoverDiv onMouseLeave={handleViewMenuInfo}>
          <HoverMenuName>{menu.name}</HoverMenuName>
          <HoverMenuSubName>{menu.en_name}</HoverMenuSubName>
          <RouteBtn onClick={handleMovePage}>
            <SearchIcon />
            이동 하기
          </RouteBtn>
        </HoverDiv>
      ) : (
        <CenterDiv onClick={handleViewMenuInfo}>
          <MenuImg src={menu.img} alt={`${menu.name} 이미지`} />
          <MenuName>{menu.name}</MenuName>
          <SubMenuName>{menu.en_name}</SubMenuName>
        </CenterDiv>
      )}
    </SlideWrapper>
  );
}

export default ImageSlide;
