import React, { useEffect, useContext, ReactNode } from "react";
import { ThemeContext } from "styled-components";
import { LoadingWrapper } from "./Loading.styles";
import BounceLoader from "react-spinners/BounceLoader";

interface LoadingProps {
  children: ReactNode;
  isLoading: boolean;
  onLoading: () => void;
}

const Loading = ({ children, isLoading, onLoading }: LoadingProps) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    isLoading && onLoading();
  }, [isLoading, onLoading]);

  useEffect(() => {
    isLoading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isLoading]);

  return (
    <LoadingWrapper
      active={isLoading}
      fadeSpeed={500}
      spinner={<BounceLoader color={theme.colors.primary_regular} size={100} />}
      classNamePrefix="MyLoader_"
    >
      {children}
    </LoadingWrapper>
  );
};

export default Loading;
