import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  ContentText,
  Backdrop,
  OkButton,
} from "./Modal.styles";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  contentText: string;
  buttonText: string;
  onClick: () => void;
}

function Modal({
  isShown,
  hide,
  contentText,
  buttonText,
  onClick,
}: ModalProps) {
  const Fade = require("react-reveal/Fade");

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isShown]);

  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <Fade bottom>
          <StyledModal>
            <Header>
              <HeaderText>알림</HeaderText>
              <CloseButton onClick={hide}></CloseButton>
            </Header>
            <Content>
              <ContentText>{contentText}</ContentText>
            </Content>
            <OkButton onClick={onClick}>{buttonText}</OkButton>
          </StyledModal>
        </Fade>
      </Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}

export default Modal;