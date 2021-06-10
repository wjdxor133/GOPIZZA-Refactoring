import React from "react";
import {
  PaginationContainer,
  PrePageArrow,
  NextPageArrow,
  PageNumberList,
  PageNumber,
} from "./Pagination.styles";

export interface PaginationProp {
  postsPerPage: number;
  totalPosts: number;
  onPaginate: (pageNum: number) => void;
  currentPage: number;
}

function Pagination({
  postsPerPage,
  totalPosts,
  onPaginate,
  currentPage,
}: PaginationProp) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PrePageArrow />
      <PageNumberList>
        {pageNumbers.map((pageNumber: number, idx: number) => {
          return (
            <PageNumber
              key={idx}
              onClick={() => onPaginate(pageNumber)}
              currentPage={currentPage}
              pageNumber={pageNumber}
            >
              {pageNumber}
            </PageNumber>
          );
        })}
      </PageNumberList>
      <NextPageArrow />
    </PaginationContainer>
  );
}

export default Pagination;
