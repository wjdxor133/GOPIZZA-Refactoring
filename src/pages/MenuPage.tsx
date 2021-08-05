import React, { useState, useEffect } from "react";
import { Loading, Header, Hero, Menubar, MenuList, Footer } from "components";
import { useFetch } from "hooks";
import { MenuTypes } from "types/menu.types";

const MenuPage = () => {
  const [menuType, setMenuType] = useState<string>("all");
  const { data } = useFetch<any>(
    `${process.env.PUBLIC_URL}/data/menuData.json`
  );
  const [menuData, setMenuData] = useState<MenuTypes[]>(data);

  useEffect(() => {
    const menuChange = () => {
      menuType === "all" ? setMenuData(data) : setMenuData(data[menuType]);
    };
    menuChange();
  }, [data, menuType]);

  const handleChangeMenuList = (type: string) => {
    type === "all" ? setMenuType("all") : setMenuType(type);
  };

  return (
    <>
      <Loading>
        <Header />
        <Hero
          title="MENU"
          subTitle="가성비 최고의 고피자 메뉴를 만나보세요."
          imgBg="https://gopizza.kr/wp-content/uploads/2021/05/menu-1.png"
        />
        <Menubar onChangeMenuList={handleChangeMenuList} menuType={menuType} />
        <MenuList menuData={menuData} />
        <Footer />
      </Loading>
    </>
  );
};

export default MenuPage;
