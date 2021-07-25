import styled from "styled-components";

export const PaymentInfoWrapper = styled.div`
  border-radius: 16px;
  box-shadow: 0 8px 25px 0 rgb(0 0 0 / 10%);
  position: sticky;
  top: 200px;
  max-height: 200px;
`;

export const PaymentInfoContents = styled.div`
  padding: 24px;
`;

export const PaymentInfoTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaymentInfoText = styled.p`
  font-size: 18px;
  margin: 12px 0;
`;
