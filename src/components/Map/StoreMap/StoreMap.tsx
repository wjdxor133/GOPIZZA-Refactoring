/* global kakao*/
import React, { useEffect } from "react";
import { StoreMapContainer, KakaoMap } from "./StoreMap.styles";

declare global {
  interface Window {
    kakao: any;
  }
}

function StoreMap() {
  useEffect(() => {
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.548945, 126.924483), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <>
      <StoreMapContainer>
        <KakaoMap id="map" />
      </StoreMapContainer>
      ;
    </>
  );
}

export default StoreMap;
