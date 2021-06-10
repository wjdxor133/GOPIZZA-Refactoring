import React from "react";
import {
  StoreListContainer,
  StoreListWrapper,
  StoreListTitle,
  StoreListSubTitle,
  StoreListTable,
  StoreListThead,
  StoreListTr,
  StoreListTh,
  StoreListTbody,
  StoreListTd,
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
          <StoreListThead>
            <StoreListTr>
              <StoreListTh scope="col">NO</StoreListTh>
              <StoreListTh scope="col">매장명</StoreListTh>
              <StoreListTh scope="col">매장주소</StoreListTh>
              <StoreListTh scope="col">주요 서비스</StoreListTh>
              <StoreListTh scope="col">연락처</StoreListTh>
            </StoreListTr>
          </StoreListThead>
          <StoreListTbody>
            {currentPosts?.map((store: StoreList, idx: number) => {
              return (
                <StoreListTr key={idx}>
                  <StoreListTd>{store.id}</StoreListTd>
                  <StoreListTd>{store.name}</StoreListTd>
                  <StoreListTd>{store.address}</StoreListTd>
                  <StoreListTd>{store.tel}</StoreListTd>
                  <StoreListTd>{store.hours}</StoreListTd>
                </StoreListTr>
              );
            })}
          </StoreListTbody>
        </StoreListTable>
      </StoreListWrapper>
    </StoreListContainer>
  );
};

export default StoreList;
