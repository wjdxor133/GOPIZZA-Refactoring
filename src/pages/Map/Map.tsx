/* global kakao*/
import React, { useState, useEffect } from "react";
import {
  Header,
  Hero,
  StoreMap,
  StoreList,
  Pagination,
  Footer,
} from "components";
// import axios from "axios";
// import { StoreAPI, KakaoApiKey } from "core/api/api";
// import MapList from "components/Map/MapList/MapList";
// import ModalPortal from "components/Common/Modal/ModalPortal";
// // import StoreModal from "components/Common/Modal/StoreModal/StoreModal";
// import styled from "styled-components";
import { useFetch } from "hooks";
import { StoreListTypes } from "types/map.types";
declare global {
  interface Window {
    kakao: any;
    Polyline: any;
  }
}

// interface MapStateType {
//   currentLat: number;
//   currentLon: number;
//   storeMarkers: any;
//   order: boolean;
// }

const Map = () => {
  const imageSrc: string =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
  const [gopizzaMap, setGopizzaMap] = useState<any>(); // 지도 생성 후 담은 변수
  // const [data, setData] = useState<MapStateType>({
  //   currentLat: 0,
  //   currentLon: 0,
  //   storeMarkers: [],
  //   order: false,
  // });
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data: storeList } = useFetch<StoreListTypes[]>(
    "/data/locationData.json"
  );
  console.log("storeList", storeList);
  // 페이지네이션
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage: number = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = storeList?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts: number = storeList?.length ? storeList.length : 0;
  // const { currentLat, currentLon, storeMarkers, order } = data;

  // 매장 API

  // API 한번만 받아올 수 있게 설정
  useEffect(() => {
    // const storeInfoAPI = async () => {
    // 목데이터 /data/locationData.json
    // const { data }: any = await axios.get("/data/locationData.json");
    // const result = (await axios.get(StoreAPI)).data.data;
    // console.log("???", data);
    // setStoreList(data);
    // KakaoMap(data);
    // };
    // storeInfoAPI();
    // setStoreList(data);
  }, []);

  // 현재 위도,경도가 바뀌면 다시 화면이 그려지게 설정
  // useEffect(() => {}, [currentLat, currentLon]);

  // // 맵을 그리는 함수
  // const KakaoMap = (result: any) => {
  //   const script = document.createElement("script");
  //   script.async = true;
  //   // script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KakaoApiKey}&autoload=false`;
  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     window.kakao.maps.load(() => {
  //       const locPosition = new window.kakao.maps.LatLng(37.548945, 126.924483);
  //       // 지도를 표시할 div
  //       const container = document.getElementById("Map-Mymap");
  //       const options = {
  //         center: locPosition,
  //         level: 3,
  //       };

  //       const map = new window.kakao.maps.Map(container, options);
  //       const zoomControl = new window.kakao.maps.ZoomControl();
  //       map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

  //       setGopizzaMap(map);

  //       const markers = result.map((store: any) => {
  //         const imageSize = new window.kakao.maps.Size(64, 69);
  //         const markerImage = new window.kakao.maps.MarkerImage(
  //           imageSrc,
  //           imageSize
  //         );

  //         return new window.kakao.maps.Marker({
  //           clickable: true,
  //           position: new window.kakao.maps.LatLng(
  //             Number(store.latlng[0]),
  //             Number(store.latlng[1])
  //           ),
  //           title: store.name,
  //           image: markerImage,
  //         });
  //       });

  //       setData({
  //         ...data,
  //         storeMarkers: markers,
  //       });

  //       markers.map((mark: any) => {
  //         mark.setMap(map);
  //       });

  //       // 전체 매장 리스트
  //       setStoreList(result);
  //     });
  //   };
  // };

  // // 현재 위치에 가까운 매장 리스트
  // const currentStoreAPI = async (currentLat: any, currentLon: any) => {
  //   const result = (
  //     await axios.get(StoreAPI, {
  //       params: {
  //         lat: currentLat,
  //         lng: currentLon,
  //       },
  //     })
  //   ).data.data;
  //   setStoreList(result);
  // };

  // // 5km 이내에 매장 마커 띄우는 함수 호출
  // const nearStore = async (storeLocation: any) => {
  //   // 가까운 매장 반경 범위(km)
  //   const radius = 5000;

  //   const nearMarkers = await storeLocation.filter((m: any) => {
  //     const c1 = gopizzaMap.getCenter(); // 현재 좌표
  //     const c2 = m.getPosition(); // 매장 좌표
  //     const poly = new window.kakao.maps.Polyline({
  //       path: [c1, c2],
  //     });

  //     const dist = poly.getLength(); // 매장 거리

  //     return dist < radius;
  //   });

  //   if (nearMarkers.length > 0) {
  //     // 매장 전체 마커 지우기
  //     storeLocation.map((m: any) => {
  //       return m.setMap(null);
  //     });

  //     // 가까운 매장 마커만 그리기
  //     nearMarkers.map((m: any) => {
  //       return m.setMap(gopizzaMap);
  //     });

  //     setData({
  //       ...data,
  //       storeMarkers: nearMarkers,
  //       order: true,
  //     });
  //   } else {
  //     setShowModal(true);
  //   }
  // };

  // // 현재 내 위치 마커
  // const currentMark = async () => {
  //   if (navigator.geolocation) {
  //     console.log("?????");
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log("position", position);
  //       // 내 현재 위치의 위도, 경도
  //       const lat = position.coords.latitude,
  //         lon = position.coords.longitude;
  //       console.log("lat", lat, "lon", lon);
  //       setData({
  //         ...data,
  //         currentLat: lat,
  //         currentLon: lon,
  //       });

  //       const moveLatLon = new window.kakao.maps.LatLng(lat, lon);
  //       gopizzaMap.panTo(moveLatLon);

  //       const marker = new window.kakao.maps.Marker({
  //         position: moveLatLon,
  //       });

  //       const iwContent = '<div style="padding:0.5em">여기에 계신가요?</div>',
  //         iwRemoveable = true;

  //       const infowindow = new window.kakao.maps.InfoWindow({
  //         content: iwContent,
  //         removable: iwRemoveable,
  //       });

  //       infowindow.open(gopizzaMap, marker);
  //       marker.setMap(gopizzaMap);

  //       // 5km 이내에 매장 마커 띄우는 함수 호출
  //       nearStore(storeMarkers);
  //       currentStoreAPI(lat, lon);
  //     });
  //   }
  // };

  // // 가장 가까운 매장 마커 보여주기
  // const NearestStoreMarks = () => {
  //   const moveLatLon = new window.kakao.maps.LatLng(
  //     storeList[0].latlng[0],
  //     storeList[0].latlng[1]
  //   );

  //   gopizzaMap.panTo(moveLatLon);

  //   const iwContent = `<div style="padding:7px; height:70px;">가까운 매장은 ${storeList[0].name} 입니다.<br/> 마커를 클릭해주세요!</div>`,
  //     iwRemoveable = true;

  //   const infowindow = new window.kakao.maps.InfoWindow({
  //     content: iwContent,
  //     removable: iwRemoveable,
  //   });

  //   infowindow.open(gopizzaMap, storeMarkers[0]);

  //   // 가장 가까운 매장 마커 클릭시 모달창 띄우기
  //   window.kakao.maps.event.addListener(storeMarkers[0], "click", () => {
  //     setShowModal(true);
  //   });
  // };

  const handlePaginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (!storeList) {
    return null;
  }

  return (
    <>
      <Header />
      <Hero
        title="Store"
        subTitle="가까운 고피자 매장을 확인해보세요!"
        imgBg="https://gopizza.kr/wp-content/uploads/2021/01/website-lanidng-1024x678.jpg"
      />
      <StoreMap storeList={storeList} />
      <StoreList totalPosts={totalPosts} currentPosts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        onPaginate={handlePaginate}
        currentPage={currentPage}
      />
      <Footer />
    </>
  );
};

export default Map;
