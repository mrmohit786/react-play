import { useState } from "react";

const useDebounce = (func, delay) => {
  const [timer, setTimer] = useState(null);
  return (...args) => {
    clearTimeout(timer);
    const timeout = setTimeout(() => {
      func(...args);
    }, delay);
    setTimer(timeout);
  };
};

export default useDebounce;
