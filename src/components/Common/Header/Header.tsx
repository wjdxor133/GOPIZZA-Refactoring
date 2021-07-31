import React, { useState, useEffect } from "react";
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
} from "./Header.styles";
import { animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "core/utils/firebase/firebase";
import { createUserProfileDocument } from "core/utils/firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "store/user/user";
import { RootState } from "store/type";
import { selectCartItemsCount } from "store/cart/cartSelectors";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollNav, setScrollNav] = useState<boolean>(false);
  const [user, setUser] = useState<firebase.User | null>();
  const state = useSelector<RootState>((state) => state);
  const dispatch = useDispatch();
  const cartItemCnt = selectCartItemsCount(state);
  const Jump = require("react-reveal/Jump");
  const Pulse = require("react-reveal/Pulse");

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
            })
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
    // console.log("클린업 전에?");
    window.addEventListener("scroll", handleChangeNav);
    return () => {
      window.removeEventListener("scroll", handleChangeNav);
      // console.log("클린업이 먼저?");
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogOut = () => {
    auth.signOut();
    dispatch(setCurrentUser(null));
    setTimeout(() => {
      toast("로그아웃 되었습니다.", {
        position: "bottom-center",
        autoClose: 2000,
      });
    }, 1000);
  };

  return (
    <HeaderContainer scrollNav={scrollNav}>
      <Nav>
        <NavLink to="/" onClick={toggleHome}>
          GOPIZZA
        </NavLink>
        <NavIcon onClick={toggle}>
          {cartItemCnt !== 0 && (
            <Jump forever={true}>
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
              로그아웃
            </SidebarLink>
          ) : (
            <SidebarLink to="/login">로그인</SidebarLink>
          )}
          <SidebarLink to="/map">매장 찾기</SidebarLink>
          <SidebarLink to="/menu">메뉴 소개</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {cartItemCnt !== 0 ? (
            <Pulse forever={true} duration={1200}>
              <SidebarRoute to="/cart">주문 하기</SidebarRoute>
            </Pulse>
          ) : (
            <SidebarRoute to="/cart">주문 하기</SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarContainer>
      <ToastContainer />
    </HeaderContainer>
  );
};

export default Header;
