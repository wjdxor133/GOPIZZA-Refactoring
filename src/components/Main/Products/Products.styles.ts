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

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: clamp(3rem, 50vw, 5rem);
`;

export const ProductVideo = styled.video`
  width: clamp(400px, 50vw, 600px);
  height: clamp(300px, 50vw, auto);
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
  white-space: pre-line;
`;
