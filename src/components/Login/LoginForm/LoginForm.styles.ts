import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const LoginFormWrapper = styled.div`
  max-width: 650px;
  height: 550px;
  padding: 48px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px;
`;

export const LogoTitle = styled(Link)`
  display: flex;
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

export const LoginFormH3 = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary_regular};
  text-align: center;
`;

export const LoginFormH5 = styled.h5`
  font-size: clamp(0.9rem, 3vw, 1rem);
  text-align: center;
  color: ${({ theme }) => theme.colors.dark_gray};
  padding: 24px;
  margin-bottom: 24px;
`;

export const FormWrapper = styled.form``;

export const InputWrapper = styled.div`
  display: flex;
  padding: 24px 36px;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  :nth-child(2) {
    border-top-style: none;
  }
`;

export const Label = styled.label`
  width: 30%;
  min-width: 100px;
`;

export const Input = styled.input`
  width: 70%;
  font-size: 16px;

  ::placeholder {
    font-weight: 400;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary_light};
`;

export const LoginBtn = styled.input`
  width: 100%;
  height: 70px;
  margin-top: 24px;
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

export const SignUpRouteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const SignUpRouteText = styled.p`
  color: ${({ theme }) => theme.colors.dark_gray};
  font-size: 14px;
`;

export const SignUpRouteLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: 14px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
