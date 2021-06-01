import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Hero, Menubar, MenuList, Footer } from "components";
import { useRequest } from "hooks";

interface MenuDataTypes {
  [key: string]: Menu[];
}

interface Menu {
  id: string;
  name: string;
  en_name: string;
  kcal: number;
  tag_text: string;
  img_url: string;
  price: number;
}

const Menu = ({ history }: any) => {
  const [menuType, setMenuType] = useState<string>("all");
  const [menuData, setMenuData] = useState([]);
  const { data, loading } = useRequest("/data/menuData.json");

  useEffect(() => {
    menuType === "all" ? setMenuData(data) : setMenuData(data[menuType]);
  }, [data, menuType]);

  const handleChangeMenuList = (type: string) => {
    type === "all" ? setMenuType("all") : setMenuType(type);
  };

  return (
    <MenuComponent>
      <Hero
        title="MENU"
        subTitle="가성비 최고의 고피자 메뉴를 만나보세요."
        imgBg="http://gopizza.kr/wp-content/uploads/2021/05/menu-1.png"
      />
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
      <Menubar onChangeMenuList={handleChangeMenuList} menuType={menuType} />
      <MenuList menuData={menuData} loading={loading} />
      <Footer />
    </MenuComponent>
  );
};

export default Menu;

const MenuComponent = styled.div`
  width: 100%;
  height: 100vh;
`;

// const NavBar = styled.div`
//   width: 100%;
//   background-color: #f6f6f6;
// `;

// const NavTextBox = styled.div`
//   margin: 0 auto;
//   padding: 2em 0;
//   display: flex;
//   justify-content: center;
// `;

// const NavText = styled.p`
//   margin: 0 2em;
//   font-size: 1.2rem;
//   color: #666;
//   :hover {
//     cursor: pointer;
//   }
// `;
