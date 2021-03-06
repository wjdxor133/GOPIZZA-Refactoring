/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useToast } from 'hooks';
import { auth, createUserProfileDocument } from 'core/utils/firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from 'store/user/user';
import { RootState } from 'store/type';
import { selectCartItemsCount } from 'store/cart/cartSelectors';
import {
  HeaderContainer,
  Nav,
  NavLink,
  NavIcon,
  Bars,
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  ItemCnt,
} from './Header.styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollNav, setScrollNav] = useState<boolean>(false);
  const [user, setUser] = useState<firebase.User | null>();
  const { toast } = useToast();
  const state = useSelector<RootState>((state) => state);
  const dispatch = useDispatch();
  const cartItemCnt = selectCartItemsCount(state);
  const Jump = require('react-reveal/Jump');
  const Pulse = require('react-reveal/Pulse');

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      setUser(userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, undefined);
        userRef?.onSnapshot((snapShot) => {
          const userInfo = { ...snapShot.data() };
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              email: userInfo.email,
            }),
          );
        });
      }
    });

    return () => unsubscribeFromAuth();
  }, [dispatch]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleChangeNav);
    return () => {
      window.removeEventListener('scroll', handleChangeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogOut = () => {
    auth.signOut();
    dispatch(setCurrentUser(null));
    toast('???????????? ???????????????.', 'bottom-center', 1200, 500);
  };

  return (
    <HeaderContainer scrollNav={scrollNav}>
      <Nav>
        <NavLink to="/" onClick={toggleHome}>
          GOPIZZA
        </NavLink>
        <NavIcon onClick={toggle}>
          {cartItemCnt !== 0 && (
            <Jump forever>
              <ItemCnt>{cartItemCnt}</ItemCnt>
            </Jump>
          )}
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          {user ? (
            <SidebarLink to="/" onClick={handleLogOut}>
              ????????????
            </SidebarLink>
          ) : (
            <SidebarLink to="/login">?????????</SidebarLink>
          )}
          <SidebarLink to="/map">?????? ??????</SidebarLink>
          <SidebarLink to="/menu">?????? ??????</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {cartItemCnt !== 0 ? (
            <Pulse forever duration={1200}>
              <SidebarRoute to="/cart">?????? ??????</SidebarRoute>
            </Pulse>
          ) : (
            <SidebarRoute to="/cart">?????? ??????</SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarContainer>
    </HeaderContainer>
  );
};

export default Header;
