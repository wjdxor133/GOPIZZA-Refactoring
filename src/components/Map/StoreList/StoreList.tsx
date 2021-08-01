import React from "react";
import {
  StoreListContainer,
  StoreListWrapper,
  StoreListTitle,
  StoreListSubTitle,
  StoreListTable,
  StoreListHeader,
  HeaderItem,
  StoreListBody,
  BodyItem,
  BodyItemInfo,
} from "./StoreList.styles";

interface MapListProps {
  totalPosts: number;
  currentPosts?: StoreList[];
}

interface StoreList {
  id: number;
  name: string;
  address: string;
  tel: string;
  hours: string;
  latlng: number[];
}

const StoreList = ({ totalPosts, currentPosts }: MapListProps) => {
  return (
    <StoreListContainer>
      <StoreListWrapper>
        <StoreListTitle>전체매장</StoreListTitle>
        <StoreListSubTitle>
          총 <span>{totalPosts}</span>개 매장이 있습니다.
        </StoreListSubTitle>
        <StoreListTable>
          <StoreListHeader>
            <HeaderItem width={10}>NO</HeaderItem>
            <HeaderItem width={20}>매장명</HeaderItem>
            <HeaderItem width={30}>매장주소</HeaderItem>
            <HeaderItem width={20}>주요 서비스</HeaderItem>
            <HeaderItem width={20}>연락처</HeaderItem>
          </StoreListHeader>
          <StoreListBody>
            {currentPosts?.map((store: StoreList, idx: number) => {
              return (
                <BodyItem key={idx}>
                  <BodyItemInfo width={10}>{store.id}</BodyItemInfo>
                  <BodyItemInfo width={20}>{store.name}</BodyItemInfo>
                  <BodyItemInfo width={30}>{store.address}</BodyItemInfo>
                  <BodyItemInfo width={20}>{store.tel}</BodyItemInfo>
                  <BodyItemInfo width={20}>{store.hours}</BodyItemInfo>
                </BodyItem>
              );
            })}
          </StoreListBody>
        </StoreListTable>
      </StoreListWrapper>
    </StoreListContainer>
  );
};

export default StoreList;
