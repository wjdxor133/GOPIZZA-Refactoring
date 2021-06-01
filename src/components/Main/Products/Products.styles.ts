import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
`;

export const ProductsH1 = styled.h1`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.brown};
`;

export const ProductsH2 = styled.p`
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: bold;
  text-align: center;
`;

export const ProductsH3 = styled.h3`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary_regular};
  margin-bottom: 5rem;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: bold;
  padding-top: 10px;
  letter-spacing: 1.2px;
`;

export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

// export const ProductPrice = styled.p`
//   margin-bottom: 1rem;
//   font-size: 2rem;
// `;

// export const ProductButton = styled.button`
//   font-size: 1rem;
//   padding: 1rem 4rem;
//   border: none;
//   background: #e31837;
//   color: #fff;
//   transition: 0.2 ease-out;
//   &:hover {
//     background: #ffc500;
//     transition: 0.2s ease-out;
//     cursor: pointer;
//     color: #000;
//   }
// `;
