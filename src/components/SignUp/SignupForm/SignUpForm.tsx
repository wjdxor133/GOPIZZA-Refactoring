import React, { useRef } from "react";
import logo from "assets/images/logo.png";
import {
  SignUpFormContainer,
  LogoWrapper,
  LogoTitle,
  LogoImg,
  SignUpFormH3,
  SignUpFormWrapper,
  FormWrapper,
  InputWrapper,
  Label,
  Input,
  SignUpBtn,
  ErrorMessage,
  LoginRouteWrapper,
  LoginRouteText,
  LoginRouteLink,
} from "./SignUpForm.styles";
import { useForm } from "react-hook-form";
import { auth } from "core/utils/firebase/firebase";
import { useToast } from "hooks";
import { useHistory } from "react-router-dom";

interface InputTypes {
  email: string;
  password: string;
  password_confirm: string;
}

const SignUpForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<InputTypes>();

  const password = useRef<string | number>();
  password.current = watch("password");
  const { toast } = useToast();
  const history = useHistory();

  const onSubmit = async (data: InputTypes) => {
    const { email, password } = data;

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      if (res) {
        toast("회원가입이 완료되었습니다.", "bottom-center", 1200, 1000);
        history.push("/login");
      }
    } catch (error) {
      toast(`이미 가입된 계정입니다.`, "bottom-center", 1500, 0);
    }
  };

  return (
    <SignUpFormContainer>
      <SignUpFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <LogoWrapper>
          <LogoTitle to="/">
            <LogoImg src={`${logo}`} alt="고피자 로고 이미지" />
            <SignUpFormH3>GOPIZZA</SignUpFormH3>
          </LogoTitle>
        </LogoWrapper>
        <FormWrapper>
          <InputWrapper>
            <Label>아이디(이메일)</Label>
            <Input
              type="email"
              placeholder="아이디(이메일)을 입력해주세요."
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && errors.email.type === "required" && (
              <ErrorMessage>이메일은 필수 항목입니다.</ErrorMessage>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <ErrorMessage>올바른 이메일 형식이 아닙니다.</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <ErrorMessage>비밀번호는 필수 항목입니다.</ErrorMessage>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <ErrorMessage>
                영문, 숫자, 특수문자 포함 8자리 이상으로 설정해주세요.
              </ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호 확인</Label>
            <Input
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              {...register("password_confirm", {
                required: true,
                validate: (value) => value === password.current,
              })}
            />
            {errors.password_confirm &&
              errors.password_confirm.type === "required" && (
                <ErrorMessage>비밀번호 확인은 필수 항목입니다.</ErrorMessage>
              )}
            {errors.password_confirm &&
              errors.password_confirm.type === "validate" && (
                <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
              )}
          </InputWrapper>
          <SignUpBtn type="submit" value="회원가입" />
        </FormWrapper>
      </SignUpFormWrapper>
      <LoginRouteWrapper>
        <LoginRouteText>이미 아이디가 있으신가요?</LoginRouteText>
        <LoginRouteLink to="/login">로그인</LoginRouteLink>
      </LoginRouteWrapper>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
