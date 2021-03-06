import styled from 'styled-components';

export const PaymentBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary_regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  padding: 24px;
  border-radius: 0 0 16px 16px;
  cursor: pointer;
`;
