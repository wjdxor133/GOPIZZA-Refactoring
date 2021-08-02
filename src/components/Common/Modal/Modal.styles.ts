import styled from "styled-components";
import { TiTimes } from "react-icons/ti";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  position: relative;
`;

export const HeaderText = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const CloseButton = styled(TiTimes)`
  font-size: 36px;
  border: none;
  border-radius: 3px;
  background: none;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 10px;
  width: 500px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;

  @media ${({ theme }) => theme.screenSizes.mobile} {
    width: 400px;
  }
`;

export const ContentText = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const OkButton = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary_regular};
  padding: 18px 0;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
`;
