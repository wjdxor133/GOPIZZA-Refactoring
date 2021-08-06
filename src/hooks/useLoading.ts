import { useState } from "react";

function useLoading() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const onLoading = (time: number) => {
    setTimeout(() => {
      setIsLoading(false);
    }, time);
  };
  return {
    isLoading,
    setIsLoading,
    onLoading,
  };
}

export default useLoading;
