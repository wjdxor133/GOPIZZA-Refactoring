import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from "./Modal.styles";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  contentText: string;
  headerText: string;
}

function Modal({ isShown, hide, contentText, headerText }: ModalProps) {
  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isShown]);

  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{contentText}</Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}

export default Modal;
