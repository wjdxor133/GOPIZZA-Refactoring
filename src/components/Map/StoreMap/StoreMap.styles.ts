import styled from "styled-components";
import { MdMyLocation } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";

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

export const MenuBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
`;

export const MenuBtn = styled.div`
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: 0.2s ease-in-out;
  }
`;

export const CurrentLocationIcon = styled(MdMyLocation)``;

// export const MarkBtn = styled(CurrentLocationBtn)``;

export const PizzaMarkIcon = styled(FaPizzaSlice)`
  font-size: 18px;
`;
