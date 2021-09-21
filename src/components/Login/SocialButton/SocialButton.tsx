import React from 'react';
import { signInWithSocial } from 'core/utils/firebase/firebase';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { SocialButtonWrapper, GoogleBtn, GithubBtn } from './SocialButton.styles';

type ButtonType = 'google' | 'github';

interface SocialButtonProps {
  type: ButtonType;
}

const SocialButton = ({ type }: SocialButtonProps) => {
  const history = useHistory();
  const LoginFnc = signInWithSocial(type);

  const handleSocialLogin = async () => {
    try {
      const res = await LoginFnc();

      if (res) {
        history.push('/');

        setTimeout(() => {
          toast('로그인 되었습니다.', {
            position: 'bottom-center',
            autoClose: 1500,
          });
        }, 1000);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <SocialButtonWrapper>
      {
        {
          google: <GoogleBtn onClick={handleSocialLogin} />,
          github: <GithubBtn onClick={handleSocialLogin} />,
        }[type]
      }
    </SocialButtonWrapper>
  );
};

export default SocialButton;
