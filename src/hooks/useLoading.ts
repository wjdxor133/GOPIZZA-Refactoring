import { useState } from "react";

function useLoading() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const onLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return {
    isLoading,
    setIsLoading,
    onLoading,
  };
}

export default useLoading;
