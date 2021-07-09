import styled from "styled-components";
import { Payment } from "components";

export const PaymentInfoWrapper = styled.div`
  border-radius: 16px;
  box-shadow: 0 8px 25px 0 rgb(0 0 0 / 10%);
  position: sticky;
  top: 0px;
  /* height: 150px; */
  /* display: inline-block; */
`;

export const PaymentInfoContents = styled.div`
  padding: 24px;
`;

export const PaymentInfoTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

// export const PaymentBtn = styled(Payment)``;
