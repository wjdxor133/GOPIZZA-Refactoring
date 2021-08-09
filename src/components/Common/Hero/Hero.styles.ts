import styled from "styled-components";

interface StyledHeroProps {
  imgBg: string;
}
export const HeroContainer = styled.div<StyledHeroProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    ${({ imgBg }) => `url(${imgBg})`};
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 70vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media ${({ theme }) => theme.screenSizes.tablet} {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 4rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1rem 4rem;
  border: none;
  background: ${({ theme }) => theme.colors.primary_regular};
  color: ${({ theme }) => theme.colors.white};
  transition: 0.2s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primary_light};
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
