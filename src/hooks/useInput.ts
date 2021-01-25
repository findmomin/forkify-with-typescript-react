import { useState } from 'react';

const useInput = (
  initialValue: string = ''
): [string, (value: string) => void] => {
  const [state, setState] = useState(initialValue);

  return [state, setState];
};

export default useInput;
