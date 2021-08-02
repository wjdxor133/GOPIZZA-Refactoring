import styled from "styled-components";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface CartItemProps {
  width: string;
}

export const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  margin-bottom: 15px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.elevations.elevation_regular};
`;

export const MenuImg = styled.img`
  width: 25%;

  @media ${({ theme }) => theme.screenSizes.tablet} {
    width: 50%;
  }
`;

export const CartItemBox = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const CartItemInfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.screenSizes.tablet} {
    flex-direction: column;
  }
`;

export const CartItemInfo = styled.div<CartItemProps>`
  width: ${({ width }) => `${width}%`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem, 1.5vw, 1.2rem);

  @media ${({ theme }) => theme.screenSizes.tablet} {
    width: 100%;
    :nth-child(1) {
      font-weight: bold;
    }
  }
`;

export const CartItemText = styled.p`
  text-align: center;
  margin: 0.3em;
`;

export const PlusIcon = styled(FiPlusSquare)`
  cursor: pointer;
`;

export const MinusIcon = styled(FiMinusSquare)`
  cursor: pointer;
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  width: 25%;
  text-align: center;
  font-size: clamp(1.25rem, 1.5vw, 1.5rem);
  font-weight: bold;
  cursor: pointer;

  @media ${({ theme }) => theme.screenSizes.tablet} {
    font-size: 1.25rem;
    margin-top: 8px;
  }
`;
