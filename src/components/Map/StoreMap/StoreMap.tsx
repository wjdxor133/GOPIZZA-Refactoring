/* eslint-disable @typescript-eslint/indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import Logo from 'assets/images/logo.webp';
import { StoreListTypes } from 'types/map.types';
import { useModal } from 'hooks';
import { Modal } from 'components';
import { useHistory } from 'react-router-dom';
import {
  StoreMapContainer,
  MapWrapper,
  MenuBtnWrapper,
  MenuBtn,
  CurrentLocationIcon,
} from './StoreMap.styles';

interface StoreMapProps {
  storeList?: StoreListTypes[];
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

let clickedOverlay: any = null;
let infowindow: any = null;
let circle: any = null;

function StoreMap({ storeList = [], isLoading, setIsLoading, setTime }: StoreMapProps) {
  const [map, setMap] = useState<any>();
  const [storeMarks, setStoreMarks] = useState<any>();
  const [markVisible, setMarkVisible] = useState<boolean>(false);
  const { isShown, toggle } = useModal();
  const history = useHistory();

  const { kakao } = window as any;
  const { document } = window as any;
  const imageSrc = `${Logo}`;
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(37.548945, 126.924483),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const zoomControl = new kakao.maps.ZoomControl();

    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

    setMap(map);
  }, [
    document,
    kakao.maps.ControlPosition.BOTTOMRIGHT,
    kakao.maps.LatLng,
    kakao.maps.Map,
    kakao.maps.ZoomControl,
  ]);

  const getStoreMarkers = useCallback(() => {
    const storeMarkers = storeList.map((store) => {
      const imageSize = new kakao.maps.Size(40, 40);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      const latlng = new kakao.maps.LatLng(store.latlng[0], store.latlng[1]);

      const marker = new kakao.maps.Marker({
        clickable: true,
        map,
        position: latlng,
        title: store.name,
        image: markerImage,
      });

      const content = `
        <div class="wrap">
           <div class="info">
               <div class="title">
                   ${store.name}
                   <div class="close" onclick="${() => closeOverlay()}" title="??????"></div>
                </div>
                <div class="body">
                    <div class="desc">
                        <div class="ellipsis">${store.address}</div>
                        <div class="jibun ellipsis">(???) ${store.addrInfo[0]} (??????) ${
        store.addrInfo[1]
      }</div>
                        <div>${store.tel}</div>
                        <div class="moveCart" onclick="${() => showModal()}">????????????!</div>
                    </div> 
                </div> 
            </div> 
        </div>`;

      const overlay = new kakao.maps.CustomOverlay({
        content,
        position: marker.getPosition(),
      });

      kakao.maps.event.addListener(marker, 'click', showOverlay);

      function showOverlay() {
        if (clickedOverlay) {
          clickedOverlay.setMap(null);
        }

        const moveLatLon = marker.getPosition();
        map.panTo(moveLatLon);
        overlay.setMap(map);
        clickedOverlay = overlay;

        document.querySelector('.close').addEventListener('click', closeOverlay);

        document.querySelector('.moveCart').addEventListener('click', showModal);
      }

      const showModal = () => {
        toggle();
      };

      const closeOverlay = () => {
        overlay.setMap(null);
      };

      return marker;
    });

    return storeMarkers;
  }, [
    document,
    imageSrc,
    kakao.maps.CustomOverlay,
    kakao.maps.LatLng,
    kakao.maps.Marker,
    kakao.maps.MarkerImage,
    kakao.maps.Size,
    kakao.maps.event,
    map,
    storeList,
    toggle,
  ]);

  useEffect(() => {
    const marks = getStoreMarkers();
    setStoreMarks(marks);
  }, [isLoading]);

  const handleCurrentLocationMark = () => {
    setIsLoading(true);
    setTime(3000);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const locPosition = new kakao.maps.LatLng(lat, lon);
        const message = '<div style="padding:5px;">????????? ?????????????!</div>';
        displayMarker(locPosition, message);
        return locPosition;
      });
    } else {
      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
      const message = 'geolocation??? ???????????? ?????????..';

      displayMarker(locPosition, message);
    }
  };

  function displayMarker(locPosition: object, message: string) {
    const marker = new kakao.maps.Marker({
      map,
      position: locPosition,
    });

    const iwContent = message;
    const iwRemoveable = true;

    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    infowindow.open(map, marker);
    map.setCenter(locPosition);
    setIsLoading(false);
  }

  const handleNearStoreFind = async () => {
    const radius = 5000;

    const nearMarkers: any = await storeMarks.filter((mark: any) => {
      const c1 = map.getCenter();
      const c2 = mark.getPosition();
      const poly = new kakao.maps.Polyline({
        path: [c1, c2],
      });

      const dist = poly.getLength();

      return dist < radius;
    });

    if (circle) {
      circle.setMap(null);
    }

    if (nearMarkers.length > 0) {
      circle = new kakao.maps.Circle({
        center: map.getCenter(),
        radius,
        strokeWeight: 5,
        strokeColor: theme.colors.primary_regular,
        strokeOpacity: 1,
        strokeStyle: 'dashed',
        fillColor: theme.colors.primary_light,
        fillOpacity: 0.4,
      });

      circle.setMap(map);
      map.setLevel(7);

      storeMarks.map((mark: any) => {
        return mark.setMap(null);
      });

      nearMarkers.map((mark: any) => {
        return mark.setMap(map);
      });

      NearestStoreMarks(nearMarkers[0]);
    }
  };

  const NearestStoreMarks = (nearMarkers: any) => {
    const moveLatLon = nearMarkers.getPosition();

    map.panTo(moveLatLon);

    const iwContent = `<div class="infowindow" style="padding:7px; height:70px;">?????? ????????? ????????? ${nearMarkers.getTitle()} ?????????.</div>`;
    const iwRemoveable = true;

    if (infowindow) {
      infowindow.close();
    }

    infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    infowindow.open(map, nearMarkers);
  };

  const handleResetMarks = () => {
    infowindow.close();
    circle.setMap(null);
    storeMarks.map((mark: any) => {
      return mark.setMap(null);
    });

    const marks = getStoreMarkers();
    setStoreMarks(marks);
    map.setLevel(10);
  };

  const handleMovePage = () => {
    history.push('/cart');
  };

  return (
    <>
      <StoreMapContainer>
        <MapWrapper id="map">
          <MenuBtnWrapper>
            <MenuBtn onClick={handleCurrentLocationMark}>
              <CurrentLocationIcon />
            </MenuBtn>
            <div onClick={() => setMarkVisible((prev) => !prev)}>
              {markVisible ? (
                <MenuBtn onClick={handleResetMarks}>?????? ?????? ??????</MenuBtn>
              ) : (
                <MenuBtn onClick={handleNearStoreFind}>????????? ?????? ??????</MenuBtn>
              )}
            </div>
          </MenuBtnWrapper>
        </MapWrapper>
      </StoreMapContainer>
      <Modal
        isShown={isShown}
        hide={toggle}
        contentText="?????????????????????????"
        buttonText="????????????"
        onClick={handleMovePage}
      />
    </>
  );
}

export default StoreMap;
