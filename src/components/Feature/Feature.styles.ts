import styled from "styled-components";
import FeaturePic from "assets/images/naver_brand_location.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("http://gopizza.kr/wp-content/uploads/2021/05/pizza.png");
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.6rem 3rem;
  border: none;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary_regular};
  transition: transform 0.2s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    transition: 0.2s ease-out;
    transform: translateY(-10px);
    cursor: pointer;
  }
`;
