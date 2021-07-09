import styled from "styled-components";

export const CartItemWrapper = styled.div`
  /* width: 70%; */
  display: flex;
  align-items: center;
  height: 120px;
  margin-bottom: 15px;
  border-radius: 16px;
  box-shadow: 0 8px 25px 0 rgb(0 0 0 / 10%);
`;

export const MenuImg = styled.img`
  width: 25%;
  /* height: 200px; */
`;

export const CartItemBox = styled.div`
  /* width: 80%; */
  margin: 0 auto;
  display: flex;
`;

export const CartItemTextBox = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* justify-content: space-around; */
  /* margin-left: 1em; */
`;

export const CartItemText = styled.p`
  width: 33.3%;
  text-align: center;
  margin: 0.3em;

  :nth-child(3) {
    font-size: 20px;
    font-weight: 500;
  }
`;
