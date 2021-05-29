import styled from "styled-components";

export const MenuNavWrapper = styled.div`
  /* padding: 24px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

export const MenuNav = styled.div`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -30px;
  padding: 24px 48px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const MenuText = styled.p`
  font-size: 1.2rem;
  cursor: pointer;
  color: #7b7b7b;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    transition: 0.2s ease-in-out;
  }
`;
