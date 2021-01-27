import { useEffect, useState } from 'react';
import * as Types from '../Types';

const useLocalStorage = (
  key: string,
  initialValue: Types.Results = []
): [Types.Results, (state: Types.Results) => void] => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(key)!) || initialValue
  );

  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [
    state,
    key,
  ]);

  return [state, setState];
};

export default useLocalStorage;
