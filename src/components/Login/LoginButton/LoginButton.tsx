import React from "react";
import { LoginButtonWrapper, GoogleBtn, GithubBtn } from "./LoginButton.styles";
import { signInWithSocial } from "core/utils/firebase/firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

type ButtonType = "google" | "github";

interface LoginButtonProps {
  type: ButtonType;
}

const LoginButton = ({ type }: LoginButtonProps) => {
  const history = useHistory();
  const LoginFnc = signInWithSocial(type);

  const handleSocialLogin = async () => {
    try {
      const res = await LoginFnc();

      if (res) {
        history.push("/");

        setTimeout(() => {
          toast("로그인 되었습니다.", {
            position: "bottom-center",
            autoClose: 1500,
          });
        }, 1000);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <LoginButtonWrapper>
      {
        {
          google: <GoogleBtn onClick={handleSocialLogin} />,
          github: <GithubBtn onClick={handleSocialLogin} />,
        }[type]
      }
    </LoginButtonWrapper>
  );
};

export default LoginButton;
