import styled from "styled-components";

export const StoreListContainer = styled.div`
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

export const StoreListTable = styled.table`
  border-top: 4px solid ${({ theme }) => theme.colors.primary_regular};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary_regular};
`;

export const StoreListThead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  color: ${({ theme }) => theme.colors.black};
`;

export const StoreListTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

export const StoreListTh = styled.th`
  font-size: 16px;
  height: 69px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary_regular};
  text-align: center;
  vertical-align: middle;
`;

export const StoreListTbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const StoreListTd = styled.td`
  height: 69px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.light_gray};
  text-align: center;
  vertical-align: middle;
  color: #292929;
  font-size: 16px;

  /* :nth-child(1) {
    color: ${({ theme }) => theme.colors.primary_regular};
  } */
`;
