import React from "react";
import {
  LoginFormContainer,
  LoginFormWrapper,
  LogoWrapper,
  LogoTitle,
  LogoImg,
  LoginFormH3,
  LoginFormH5,
  InputWrapper,
  Label,
  Input,
  LoginBtn,
  SignUpRouteWrapper,
  SignUpRouteText,
  SignUpRouteLink,
} from "./LoginForm.styles";
import { useInput } from "hooks";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "core/utils/firebase/firebase";
import logo from "assets/images/gopizza_logo.jpg";

function LoginForm() {
  const [emailId, setEmailId, onChangeEmailId] = useInput<string>("");
  const [password, setPassword, onChangePassword] = useInput<string>("");

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(emailId, password);
      setEmailId("");
      setPassword("");
      toast.success("로그인 되었습니다.", {
        position: "bottom-center",
        autoClose: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginFormContainer>
      <LoginFormWrapper>
        <LogoWrapper>
          <LogoTitle to="/">
            <LogoImg src={`${logo}`} alt="" />
            <LoginFormH3>GOPIZZA</LoginFormH3>
          </LogoTitle>
        </LogoWrapper>
        <LoginFormH5>
          고피자 회원으로 로그인하시면 제공하는 다양한 서비스를 이용할 수
          있습니다.
        </LoginFormH5>
        <InputWrapper>
          <Label>이메일 아이디</Label>
          <Input
            name="emailId"
            placeholder="이메일 아이디 입력"
            value={emailId}
            onChange={onChangeEmailId}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={onChangePassword}
            required
          />
        </InputWrapper>
        <LoginBtn onClick={handleSubmit}>로그인</LoginBtn>
        <SignUpRouteWrapper>
          <SignUpRouteText>계정이 없으신가요?</SignUpRouteText>
          <SignUpRouteLink to="/signUp">회원가입</SignUpRouteLink>
        </SignUpRouteWrapper>

        <ToastContainer />
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;
