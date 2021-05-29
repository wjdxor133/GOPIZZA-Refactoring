import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import MenuList from "../../containers/MenuList/MenuList";
import { Hero, Menubar, Footer } from "components";

const Menu = ({ history }: any) => {
  const [menuNum, setMenuNum] = useState<number>(0);
  const menuBar: string[] = [
    "피자",
    "파스타",
    "사이드 & 디저트",
    "음료",
    "패키지",
    "토핑 & 소스",
  ];

  const changeMenuList = (num: number) => {
    setMenuNum(num);
  };

  return (
    <MenuComponent>
      <Hero
        title="MENU"
        subTitle="가성비 최고의 고피자 메뉴를 만나보세요."
        imgBg="http://gopizza.kr/wp-content/uploads/2021/05/menu-1.png"
      />
      {/* <ImgBox>
        <ImgText>
          신선한 재료를
          <br /> 화덕으로 뜨겁게
          <br />
          <span className="imgText">
            가성비 최고의 고피자 메뉴를 만나보세요.
          </span>
        </ImgText>
      </ImgBox> */}
      {/* <NavBar>
        <NavTextBox>
          {menuBar.map((menu: string, idx: number) => {
            return (
              <NavText
                key={idx}
                onClick={() => {
                  changeMenuList(idx);
                }}
              >
                {menu}
              </NavText>
            );
          })}
        </NavTextBox>
      </NavBar> */}
      <Menubar />
      <MenuList menuNum={menuNum} />
      <Footer />
    </MenuComponent>
  );
};

export default Menu;

const MenuComponent = styled.div`
  width: 100%;
  height: 100vh;
`;

const ImgBox = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("http://gopizza.kr/wp-content/uploads/2021/05/menu-1.png");
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgText = styled.p`
  position: absolute;
  top: 35%;
  left: 15%;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);

  .imgText {
    font-size: 2rem;
  }
`;

const NavBar = styled.div`
  width: 100%;
  background-color: #f6f6f6;
`;

const NavTextBox = styled.div`
  margin: 0 auto;
  padding: 2em 0;
  display: flex;
  justify-content: center;
`;

const NavText = styled.p`
  margin: 0 2em;
  font-size: 1.2rem;
  color: #666;
  :hover {
    cursor: pointer;
  }
`;
