/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const reset = () => setValue(initialValue);
  const inputProps = {
    value,
    onChange: e => setValue(e.target.value)
  };
  return [value, reset, inputProps];
};

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
