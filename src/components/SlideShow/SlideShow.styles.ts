import styled from "styled-components";

export const SlideContainer = styled.div`
  height: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  /* 화살표 버튼 제거 */
  .slick-prev:before {
    display: none;
  }
  .slick-next:before {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const TitleH1 = styled.h1`
  color: ${({ theme }) => theme.colors.brown};
  font-size: clamp(2rem, 2.5vw, 3rem);
`;

export const TitleH3 = styled.h3`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.brown};
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  padding-top: 10px;
  letter-spacing: 1.2px;
  p {
    color: ${({ theme }) => theme.colors.primary_regular};
    padding-left: 10px;
  }
`;

// export const Title = styled.h1`
//   font-size: clamp(2rem, 2.5vw, 3rem);
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 5rem;
//   color: ${({ theme }) => theme.colors.brown};
// `;
