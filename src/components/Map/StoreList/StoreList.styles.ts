import styled from "styled-components";

interface StyledStoreListProps {
  width: number;
}

export const StoreListContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoreListWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const StoreListTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 36px;
`;

export const StoreListSubTitle = styled.h5`
  font-weight: bold;
  padding: 8px 0;

  span {
    color: ${({ theme }) => theme.colors.primary_regular};
  }
`;

export const StoreListTable = styled.div`
  /* min-width: 580px; */
  border-top: 4px solid ${({ theme }) => theme.colors.primary_regular};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary_regular};
`;

export const StoreListHeader = styled.header`
  height: 69px;
  display: flex;
  align-items: center;
  border-color: inherit;
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary_regular};

  @media ${({ theme }) => theme.screenSizes.tablet} {
    display: none;
  }
`;

export const HeaderItem = styled.p<StyledStoreListProps>`
  width: ${({ width }) => `${width}%`};
  text-align: center;
`;

export const StoreListBody = styled.ul`
  border-color: inherit;
`;

export const BodyItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.light_gray};
  padding: 20px 0;

  @media ${({ theme }) => theme.screenSizes.tablet} {
    flex-direction: column;
    padding: 20px 0;
  }
`;

export const BodyItemInfo = styled(HeaderItem)`
  font-size: clamp(0.9rem, 1.5vw, 1rem);

  @media ${({ theme }) => theme.screenSizes.tablet} {
    width: 100%;
    text-align: left;
    padding: 4px 0;

    :nth-child(1) {
      display: none;
    }
    :nth-child(2) {
      font-size: 1.05rem;
      font-weight: bold;
    }
  }
`;
