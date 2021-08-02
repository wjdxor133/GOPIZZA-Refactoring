import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const SlideWrapper = styled.div`
  width: 300px;
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 250ms;
  border-radius: 4px;
  padding: 12px;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

export const HoverDiv = styled(CenterDiv)`
  height: 230px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.navy};
  padding: 24px;
  transition: 1s ease-in-out;

  &:hover {
    transform: rotateY(360deg);
  }
`;

export const HoverMenuName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const HoverMenuSubName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const SearchIcon = styled(FaSearch)`
  margin-right: 4px;
`;

export const RouteBtn = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_regular};
  padding: 12px;
  margin-top: 24px;
  transition: transform 250ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_light};
    transition: 0.2s ease-in-out;
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

export const MenuImg = styled.img``;

export const MenuName = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 4px;
`;

export const SubMenuName = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: 0.9rem;
  margin-top: 8px;
`;
