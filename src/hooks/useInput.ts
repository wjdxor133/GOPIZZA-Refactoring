import { useState, useCallback, Dispatch, SetStateAction } from 'react';

function useInput<T>(
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>, (e?: React.ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<typeof initialValue>(initialValue);
  const changer = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, changer];
}

export default useInput;
