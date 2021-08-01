import React from "react";
import styled from "styled-components";
import { LoginForm, SocialButton } from "components";

function LoginPage() {
  return (
    <>
      <Main>
        <LoginForm />
        <ButtonWrapper>
          <SocialButton type="google" />
          <SocialButton type="github" />
        </ButtonWrapper>
      </Main>
    </>
  );
}

export default LoginPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
`;
