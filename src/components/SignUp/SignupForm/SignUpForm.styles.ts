import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const SignUpFormWrapper = styled.div`
  width: 80%;
  max-width: 600px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px;
  margin-bottom: 20px;
`;

export const LogoTitle = styled(Link)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-out;
    transform: translateY(-10px);
  }
`;

export const LogoImg = styled.img`
  width: clamp(60px, 10vw, 80px);
  height: clamp(60px, 10vw, 80px);
  margin-right: 8px;
`;

export const SignUpFormH3 = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary_regular};
  text-align: center;
`;

export const FormWrapper = styled.form`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-gap: 16px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 24px 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const SignUpBtn = styled.input`
  width: 100%;
  height: 70px;
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_regular};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary_light};
    transition: 0.2s ease-in-out;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary_regular};
  margin-top: 8px;
`;

export const LoginRouteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const LoginRouteText = styled.p`
  color: ${({ theme }) => theme.colors.dark_gray};
  font-size: 14px;
`;

export const LoginRouteLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: 14px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
