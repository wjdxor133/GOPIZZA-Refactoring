import styled from 'styled-components';

export const CartInfoWrapper = styled.div`
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.elevations.elevation_regular};
  position: sticky;
  top: 200px;
  min-width: 300px;
  max-height: 200px;
`;

export const CartInfoContents = styled.div`
  padding: 24px;
`;

export const CartInfoTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartInfoText = styled.p`
  font-size: 18px;
  margin: 12px 0;
`;
