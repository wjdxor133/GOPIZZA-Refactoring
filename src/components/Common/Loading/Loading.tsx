import React, { useState, useEffect, useContext, ReactNode } from "react";
import { ThemeContext } from "styled-components";
import { LoadingWrapper } from "./Loading.styles";
import BounceLoader from "react-spinners/BounceLoader";

interface LoadingProps {
  children: ReactNode;
}

const Loading = ({ children }: LoadingProps) => {
  const [loading, setLoading] = useState(true);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    loading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [loading]);

  return (
    <LoadingWrapper
      active={loading}
      fadeSpeed={500}
      spinner={<BounceLoader color={theme.colors.primary_regular} size={100} />}
      classNamePrefix="MyLoader_"
    >
      {children}
    </LoadingWrapper>
  );
};

export default Loading;
