/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'components';
import { useHover, useModal, useToast } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/type';
import { addItem } from 'store/cart/cart';
import {
  MenuCardWrapper,
  CardContents,
  MenuImg,
  MenuName,
  MenuSubName,
  KcalText,
  HoverContents,
  HoverName,
  HoverSubName,
  HoverWrapper,
  PriceText,
  CartIcon,
  CartBtn,
} from './MenuCard.styles';

interface MenuCardProps {
  menu: Menu;
}

interface Menu {
  id: number;
  name: string;
  en_name: string;
  kcal: number;
  tag_text: string;
  img_url: string;
  price: number;
}

function MenuCard({ menu }: MenuCardProps) {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const { isShown, toggle } = useModal();
  const history = useHistory();
  const { toast } = useToast();
  const Bounce = require('react-reveal/Bounce');
  const currentUser = useSelector<RootState>((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleShowLoginModal = () => {
    if (currentUser === null) {
      toggle();
    } else {
      dispatch(addItem(menu));
      toast(`${menu.name} 추가!`, 'bottom-center', 1500, 0);
    }
  };

  const handleMoveLoginPage = () => {
    toggle();
    history.push('/login');
  };

  return (
    <MenuCardWrapper ref={hoverRef}>
      {isHover ? (
        <HoverContents>
          <HoverWrapper>
            <Bounce>
              <HoverName>{menu.name}</HoverName>
            </Bounce>
            <Bounce>
              <HoverSubName>{menu.tag_text}</HoverSubName>
              <PriceText>{`${menu.price}원`}</PriceText>
            </Bounce>

            <Bounce bottom>
              <CartBtn onClick={handleShowLoginModal}>
                <CartIcon />
                장바구니
              </CartBtn>
            </Bounce>
          </HoverWrapper>
        </HoverContents>
      ) : (
        <CardContents>
          <MenuImg src={menu.img_url} />
          <MenuName>{menu.name}</MenuName>
          <MenuSubName>{menu.en_name}</MenuSubName>
          <KcalText>{`${menu.kcal} kcal`}</KcalText>
        </CardContents>
      )}
      <Modal
        isShown={isShown}
        hide={toggle}
        contentText="로그인 해주세요!"
        buttonText="로그인"
        onClick={handleMoveLoginPage}
      />
    </MenuCardWrapper>
  );
}

export default MenuCard;
