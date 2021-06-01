import styled, { css } from "styled-components";

interface StyledMenubarProps {
  menuType: string;
}

export const MenuNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light_gray};
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

export const MenuText = styled.p<StyledMenubarProps>`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.dark_gray};
  position: relative;
  cursor: pointer;
  padding-bottom: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    transition: 0.2s ease-in-out;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.color_primary_regular};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75);
    transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75);
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  ${({ menuType }) =>
    css`
      &.${menuType} {
        color: ${({ theme }) => theme.colors.primary_regular};
        :before {
          color: ${({ theme }) => theme.colors.primary_regular};
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
      }
    `}
`;
