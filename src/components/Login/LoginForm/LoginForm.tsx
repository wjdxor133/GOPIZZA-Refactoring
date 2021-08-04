import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "assets/images/logo.png";
import {
  LoginFormWrapper,
  LogoWrapper,
  LogoTitle,
  LogoImg,
  LoginFormH3,
  LoginFormH5,
  FormWrapper,
  InputWrapper,
  Label,
  Input,
  ErrorMessage,
  LoginBtn,
  SignUpRouteWrapper,
  SignUpRouteText,
  SignUpRouteLink,
} from "./LoginForm.styles";
import { useInput, useToast } from "hooks";
import { auth } from "core/utils/firebase/firebase";

function LoginForm() {
  const [emailId, setEmailId, onChangeEmailId] = useInput<string>("");
  const [password, setPassword, onChangePassword] = useInput<string>("");
  const [error, setError] = useState<string>("");
  const history = useHistory();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(emailId, password);
      setEmailId("");
      setPassword("");
      toast("로그인 되었습니다.", "bottom-center", 1200, 500);
      history.push("/");
    } catch (error) {
      console.log("error", error);
      setError(`가입하지 않은 이메일이거나, 잘못된 비밀번호 입니다.`);
    }
  };

  return (
    <LoginFormWrapper>
      <LogoWrapper>
        <LogoTitle to="/">
          <LogoImg src={`${logo}`} alt="고피자 로고 이미지" />
          <LoginFormH3>GOPIZZA</LoginFormH3>
        </LogoTitle>
      </LogoWrapper>
      <LoginFormH5>
        고피자 회원으로 로그인하시면 제공하는 다양한 서비스를 이용할 수
        있습니다.
      </LoginFormH5>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>이메일 아이디</Label>
          <Input
            type="email"
            placeholder="이메일 아이디 입력"
            value={emailId}
            onChange={onChangeEmailId}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={onChangePassword}
            required
          />
        </InputWrapper>
        <ErrorMessage>{error}</ErrorMessage>
        <LoginBtn type="submit" value="로그인" />
      </FormWrapper>
      <SignUpRouteWrapper>
        <SignUpRouteText>계정이 없으신가요?</SignUpRouteText>
        <SignUpRouteLink to="/signUp">회원가입</SignUpRouteLink>
      </SignUpRouteWrapper>
    </LoginFormWrapper>
  );
}

export default LoginForm;
