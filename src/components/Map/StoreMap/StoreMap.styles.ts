import styled from "styled-components";
import { MdMyLocation } from "react-icons/md";

export const StoreMapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 500px;
  padding: 24px;
  border-radius: 10px;
`;

export const CurrentLocationBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
  cursor: pointer;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;

export const CurrentLocationIcon = styled(MdMyLocation)`
  font-size: 18px;
`;
