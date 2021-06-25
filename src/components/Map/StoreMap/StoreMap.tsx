import React, { useState, useEffect } from "react";
import {
  StoreMapContainer,
  MapWrapper,
  MenuBtnWrapper,
  MenuBtn,
  CurrentLocationIcon,
  PizzaMarkIcon,
} from "./StoreMap.styles";

import Logo from "assets/images/logo.png";
import { StoreListTypes } from "types/map.types";

interface StoreMapProps {
  storeList: StoreListTypes[];
}

function StoreMap({ storeList }: StoreMapProps) {
  // const [map, setMap] = useState<any>({});
  const kakao = (window as any).kakao;

  useEffect(() => {
    const mapContainer = document.getElementById("map"),
      mapOption = {
        center: new kakao.maps.LatLng(37.548945, 126.924483),
        level: 3,
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const imageSrc = `${Logo}`;

    storeList.map((store) => {
      const imageSize = new kakao.maps.Size(50, 50);

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      const latlng = new kakao.maps.LatLng(store.latlng[0], store.latlng[1]);

      return new kakao.maps.Marker({
        clickable: true,
        map: map,
        position: latlng,
        title: store.name,
        image: markerImage,
      });
    });
  }, [
    kakao.maps.LatLng,
    kakao.maps.Map,
    kakao.maps.Marker,
    kakao.maps.MarkerImage,
    kakao.maps.Size,
    storeList,
  ]);

  const handleCurrentLocationMark = async () => {
    // getCurrentLocation(map);
  };

  const handleNearStoreFind = async () => {
    // await handleCurrentLocationMark();
    // const storeMarks = await handleStoreMarks();
    // await getNearStores(storeMarks, map);
  };

  return (
    <>
      <StoreMapContainer>
        <MapWrapper id="map">
          <MenuBtnWrapper>
            <MenuBtn onClick={handleCurrentLocationMark}>
              <CurrentLocationIcon />
            </MenuBtn>
            {/* <MenuBtn onClick={handleStoreMarks}>
              <PizzaMarkIcon />
            </MenuBtn> */}
            <MenuBtn onClick={handleNearStoreFind}>가까운 매장 찾기</MenuBtn>
          </MenuBtnWrapper>
        </MapWrapper>
      </StoreMapContainer>
    </>
  );
}

export default StoreMap;
