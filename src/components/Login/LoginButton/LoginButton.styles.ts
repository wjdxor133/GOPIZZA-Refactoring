import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa";

export const LoginButtonWrapper = styled.div`
  display: inline-block;
`;

export const GoogleBtn = styled(FcGoogle)`
  font-size: 36px;
  cursor: pointer;
`;

export const GithubBtn = styled(FaGithubAlt)`
  font-size: 36px;
  cursor: pointer;
`;
