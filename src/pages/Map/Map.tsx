import React, { useState } from "react";
import {
  Header,
  Hero,
  StoreMap,
  StoreList,
  Pagination,
  Footer,
} from "components";

import { useFetch } from "hooks";
import { StoreListTypes } from "types/map.types";
declare global {
  interface Window {
    kakao: any;
    Polyline: any;
  }
}

const Map = () => {
  // const [showModal, setShowModal] = useState<boolean>(false);
  const { data: storeList } = useFetch<StoreListTypes[]>(
    "/data/locationData.json"
  );

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
