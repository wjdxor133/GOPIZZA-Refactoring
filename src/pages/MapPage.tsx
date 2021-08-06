import React, { useState } from "react";
import {
  Loading,
  Header,
  Hero,
  StoreMap,
  StoreList,
  Pagination,
  Footer,
} from "components";
import { useFetch, useLoading } from "hooks";
import { StoreListTypes } from "types/map.types";

declare global {
  interface Window {
    kakao: any;
    Polyline: any;
  }
}

const MapPage = () => {
  const { data: storeList } = useFetch<StoreListTypes[]>(
    `${process.env.PUBLIC_URL}/data/locationData.json`
  );
  const { isLoading, setIsLoading, onLoading } = useLoading();
  const [time, setTime] = useState<number>(1000);
  // 페이지네이션
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage: number = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = storeList?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts: number = storeList?.length ? storeList.length : 0;

  const handlePaginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Loading isLoading={isLoading} onLoading={() => onLoading(time)}>
        <Header />
        <Hero
          title="Store"
          subTitle="가까운 고피자 매장을 확인해보세요!"
          imgBg="https://gopizza.kr/wp-content/uploads/2021/01/website-lanidng-1024x678.jpg"
        />
        <StoreMap
          storeList={storeList}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setTime={setTime}
        />
        <StoreList totalPosts={totalPosts} currentPosts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          onPaginate={handlePaginate}
          currentPage={currentPage}
        />
        <Footer />
      </Loading>
    </>
  );
};

export default MapPage;
