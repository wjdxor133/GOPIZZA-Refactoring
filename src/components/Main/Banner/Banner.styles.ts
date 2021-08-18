import styled from "styled-components";

export const BannerWrapper = styled.section`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const BannerBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const BannerContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  left: 20px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerH1 = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
  letter-spacing: 3px;
`;

export const BannerP = styled.p`
  width: 100%;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem, 2.5vw, 4rem);
  font-weight: bold;
  max-width: 600px;
  padding-left: 20px;
`;
