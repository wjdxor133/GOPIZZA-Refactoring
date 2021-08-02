import React, { useState, useEffect } from "react";
import { Header, Hero, Menubar, MenuList, Footer } from "components";
import { useFetch } from "hooks";

const MenuPage = () => {
  const [menuType, setMenuType] = useState<string>("all");
  const [menuData, setMenuData] = useState([]);
  const { data } = useFetch<any>(
    `${process.env.PUBLIC_URL}/data/menuData.json`
  );

  useEffect(() => {
    menuType === "all" ? setMenuData(data) : setMenuData(data[menuType]);
  }, [data, menuType]);

  const handleChangeMenuList = (type: string) => {
    type === "all" ? setMenuType("all") : setMenuType(type);
  };

  return (
    <>
      <Header />
      <Hero
        title="MENU"
        subTitle="가성비 최고의 고피자 메뉴를 만나보세요."
        imgBg="https://gopizza.kr/wp-content/uploads/2021/05/menu-1.png"
      />
      <Menubar onChangeMenuList={handleChangeMenuList} menuType={menuType} />
      <MenuList menuData={menuData} />
      <Footer />
    </>
  );
};

export default MenuPage;
