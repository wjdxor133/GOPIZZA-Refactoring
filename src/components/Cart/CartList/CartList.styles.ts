import styled from "styled-components";

export const CartListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const CartListTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

export const CartListBtn = styled.button`
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 12px;
  cursor: pointer;
`;
