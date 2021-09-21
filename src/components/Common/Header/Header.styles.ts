import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice, FaTimes } from 'react-icons/fa';

interface StyledHeaderProps {
  scrollNav?: boolean;
  isOpen?: boolean;
}

export const HeaderContainer = styled.header<StyledHeaderProps>`
  color: ${({ scrollNav, theme }) =>
    scrollNav ? theme.colors.primary_regular : theme.colors.white};
  background: ${({ scrollNav, theme }) => (scrollNav ? theme.colors.white : 'transparent')};
  height: 80px;
  margin-top: -80px;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.2s ease-in-out;
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_regular};
    transition: 0.2s ease-in-out;
  }

  @media ${({ theme }) => theme.screenSizes.mobile} {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_regular};
    transition: 0.2s ease-in-out;
  }

  p {
    transform: translate() (-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const SidebarContainer = styled.aside<StyledHeaderProps>`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary_regular};
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media ${({ theme }) => theme.screenSizes.mobile} {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media ${({ theme }) => theme.screenSizes.mobile} {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${({ theme }) => theme.colors.primary_regular};
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;

  &:hover {
    transition: 0.2s ease-in-out;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary_light};
  }
`;

export const ItemCnt = styled.span`
  width: 24px;
  text-align: center;
  font-weight: bold;
  border: 3px solid;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  left: -31px;
  z-index: 2;
`;
