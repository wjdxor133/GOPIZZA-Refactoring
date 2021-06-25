/* global kakao*/

const kakao = (window as any).kakao;

// 현재 위치 가져오는 함수
export const getCurrentLocation = async (map: any) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude,
        lon = position.coords.longitude;
      const locPosition = new kakao.maps.LatLng(lat, lon),
        message = '<div style="padding:5px;">여기에 계신가요?!</div>';
      displayMarker(locPosition, message, map);
      return locPosition;
    });
  } else {
    const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
      message = "geolocation을 사용할수 없어요..";

    displayMarker(locPosition, message, map);
  }
};

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition: object, message: string, map: any) {
  // console.log("locPosition", locPosition);
  const marker = new kakao.maps.Marker({
    map: map,
    position: locPosition,
  });
  console.log("확인");

  const iwContent = message,
    iwRemoveable = true;

  const infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });
  infowindow.open(map, marker);
  map.setCenter(locPosition);
}

// 5km 이내에 매장 마커 띄우는 함수 호출
export const getNearStores = async (storeMarks: any, map: any) => {
  // 가까운 매장 반경 범위(km)
  // const loc = getCurrentLocation(map);
  const radius = 3000;
  // console.log("storeList", storeList);
  // const storeMarks = await getStoreMarks(storeList, map);
  console.log("storeMarks?", storeMarks);

  const nearMarkers: any = await storeMarks.filter((mark: any) => {
    const c1 = map.getCenter(); // 현재 좌표
    const c2 = mark.getPosition(); // 매장 좌표
    const poly = new kakao.maps.Polyline({
      path: [c1, c2],
    });

    const dist = Math.floor(poly.getLength()); // 매장 거리
    // console.log("dist", dist);

    return dist < radius;
  });

  console.log("nearMarkers", nearMarkers);

  if (nearMarkers.length > 0) {
    // 매장 전체 마커 지우기
    await storeMarks.map((mark: any) => {
      return mark.setMap(null);
    });

    // 가까운 매장 마커만 그리기
    await nearMarkers.map((mark: any) => {
      return mark.setMap(map);
    });
  } else {
    console.log("확인!");
    // setShowModal(true);
  }
};
