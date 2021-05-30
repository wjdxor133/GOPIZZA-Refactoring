import { useState, useEffect } from "react";
import axios from "axios";

const useRequest = (url: string) => {
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<never>();

  useEffect(() => {
    const getFreshData = async () => {
      try {
        const { data: response } = await axios.get(url);
        setData(response);
      } catch (e) {
        setError(e);
      }
    };
    getFreshData();
  }, [url]);

  const loading: boolean = !data && !error;

  return {
    data,
    loading,
    error,
  };
};
export default useRequest;
