import styled from "styled-components";

export const MenuListWrapper = styled.div`
  width: 100%;
`;

export const MenuListBox = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
  grid-gap: 30px;
  padding: 30px 0 50px;

  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const LoadingText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  opacity: 0.5;
  padding: 3em;
`;
