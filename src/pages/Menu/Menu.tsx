import React, { useState, useEffect } from "react";
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

const Menu = () => {
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
    <>
      <Hero
        title="MENU"
        subTitle="가성비 최고의 고피자 메뉴를 만나보세요."
        imgBg="http://gopizza.kr/wp-content/uploads/2021/05/menu-1.png"
      />
      <Menubar onChangeMenuList={handleChangeMenuList} menuType={menuType} />
      <MenuList menuData={menuData} loading={loading} />
      <Footer />
    </>
  );
};

export default Menu;
