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
} from "./Header.styles";
import { animateScroll as scroll } from "react-scroll";
import { auth } from "core/utils/firebase/firebase";
import { ToastContainer, toast } from "react-toastify";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import { auth } from "core/utils/firebase/firebase";
import { createUserProfileDocument } from "core/utils/firebase/firebase";
import { setCurrentUser, selectCurrentUser } from "redux/user/user";
// import CartIcon from "containers/Cart/CartIcon/CartIcon";

type HeaderPropsTypes = {
  setCurrentUser?: any;
};

const Header = ({ setCurrentUser }: HeaderPropsTypes) => {
  // const [curUserState, setCurUserState] = useState<firebase.User | null>(null);
  const [user, setUser] = useState<firebase.User | null>();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      setUser(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, undefined);
        // console.log("userRef", userRef);
        userRef?.onSnapshot((snapShot) => {
          // console.log("snapShot", snapShot);
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      console.log("userAuth", userAuth);
    });

    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollNav, setScrollNav] = useState<boolean>(false);

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
    window.addEventListener("scroll", handleChangeNav);
  }, []);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogOut = () => {
    auth.signOut();
    toast.success("로그아웃 되었습니다.", {
      position: "bottom-center",
      autoClose: 2000,
    });
  };

  return (
    <HeaderContainer scrollNav={scrollNav}>
      <Nav>
        <NavLink to="/" onClick={toggleHome}>
          GOPIZZA
        </NavLink>
        <NavIcon onClick={toggle}>
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
          <SidebarRoute to="/cart">주문 하기</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
      <ToastContainer />
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
