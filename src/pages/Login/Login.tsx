import React from "react";
import styled from "styled-components";
import { LoginForm, LoginButton } from "components";

function Login() {
  return (
    <>
      <Main>
        <LoginForm />
        <ButtonWrapper>
          <LoginButton type="google" />
          <LoginButton type="github" />
        </ButtonWrapper>
      </Main>
    </>
  );
}

export default Login;

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
