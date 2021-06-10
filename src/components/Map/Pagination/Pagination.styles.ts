import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface StyledPaginationProps {
  currentPage: number;
  pageNumber: number;
}

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

export const PrePageArrow = styled(IoIosArrowBack)`
  font-size: 18px;
`;

export const NextPageArrow = styled(IoIosArrowForward)`
  font-size: 18px;
`;

export const PageNumberList = styled.ul`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;

export const PageNumber = styled.li<StyledPaginationProps>`
  font-size: 18px;
  color: ${({ currentPage, pageNumber, theme }) =>
    currentPage === pageNumber && theme.colors.primary_regular};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary_light};
  }
`;
