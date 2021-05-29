import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export const MenuCardWrapper = styled.div``;

export const CardContents = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 330px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuImg = styled.img`
  width: 100%;
`;

export const MenuName = styled.h3`
  font-size: clamp(1rem, 1.5vw, 3rem);
  font-weight: bold;
`;

export const MenuSubName = styled.p`
  font-size: 0.9rem;
`;

export const KcalText = styled.p`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 12px;
`;

export const HoverContents = styled(CardContents)`
  background-color: ${({ theme }) => theme.colors.navy};
  /* position: relative; */
`;

export const HoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  left: 0;
  top: 0; */
  width: 100%;
  height: 100%;
  opacity: 0;
  /* z-index: 5; */
  transform: scale(0.5);
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 1;
    transform: scale(1);
    /* bottom: 12px; */
    transition-duration: 0.3s;
    transition-delay: 0.3s;
  }
`;

export const HoverName = styled(MenuName)`
  font-size: clamp(2rem, 1.5vw, 4rem);
  text-align: center;
`;

export const HoverSubName = styled(MenuSubName)`
  text-align: center;
  padding: 8px 0;
`;

export const PriceText = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 20px;
`;

export const CartBtn = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_regular};
  padding: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 30px;
  transition: transform 0.2s ease-out;

  &:hover {
    cursor: pointer;
    transition: 0.2s ease-out;
    transform: translateY(-10px);
  }
`;

export const CartIcon = styled(FaPlus)`
  margin-right: 8px;
`;
