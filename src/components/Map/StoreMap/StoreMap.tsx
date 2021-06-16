import React, { useState, useEffect } from "react";
import {
  StoreMapContainer,
  MapWrapper,
  CurrentLocationBtn,
  CurrentLocationIcon,
} from "./StoreMap.styles";
import { getStoreMap, getCurrentLocation } from "./map";

interface StoreMapProps {
  storeList: StoreListTypes[] | undefined;
}

interface StoreListTypes {
  id: number;
  name: string;
  address: string;
  tel: string;
  hours: string;
  latlng: number[];
}

function StoreMap({ storeList }: StoreMapProps) {
  const [map, setMap] = useState<any>({});
  useEffect(() => {
    const map = getStoreMap();
    setMap(map);
  }, []);

  const onCurrentLocationMark = async () => {
    const currentMark = await getCurrentLocation(map);
    setMap(currentMark);
    // console.log("currentMark", typeof currentMark);
  };

  console.log("storeList", storeList);

  return (
    <>
      <StoreMapContainer>
        <MapWrapper id="map">
          <CurrentLocationBtn onClick={onCurrentLocationMark}>
            <CurrentLocationIcon />
          </CurrentLocationBtn>
        </MapWrapper>
      </StoreMapContainer>
    </>
  );
}

export default StoreMap;
