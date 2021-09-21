import styled from 'styled-components';
import { RiShoppingCartFill } from 'react-icons/ri';

export const MenuCardWrapper = styled.div``;

export const CardContents = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 200px;
  min-height: clamp(300px, 1.5vw, 330px);
  padding: clamp(0.8rem, 1.5vw, 1.2rem);
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
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

export const KcalText = styled.p`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 12px;
`;

export const HoverContents = styled(CardContents)`
  background-color: ${({ theme }) => theme.colors.navy};
`;

export const HoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export const HoverName = styled(MenuName)`
  font-size: clamp(1.5rem, 1.5vw, 4rem);
  text-align: center;
`;

export const HoverSubName = styled(MenuSubName)`
  text-align: center;
  line-height: 1rem;
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

export const CartIcon = styled(RiShoppingCartFill)`
  margin-right: 8px;
`;
