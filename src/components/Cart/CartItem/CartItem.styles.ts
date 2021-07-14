import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";

export const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  margin-bottom: 15px;
  border-radius: 16px;
  box-shadow: 0 8px 25px 0 rgb(0 0 0 / 10%);
`;

export const MenuImg = styled.img`
  width: 25%;
`;

export const CartItemBox = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const CartItemTextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CartItemText = styled.p`
  width: 25%;
  text-align: center;
  margin: 0.3em;

  :nth-child(3) {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  width: 25%;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`;
