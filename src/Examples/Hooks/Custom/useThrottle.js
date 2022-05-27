import { useState } from "react";

const useThrottle = (func, delay) => {
  const [timer, setTimer] = useState(false);
  const [lastArgs, setArgs] = useState(null);

  return (...args) => {
    if (!timer) {
      setTimer(true);
      func(...args);
      setTimeout(() => {
        setTimer(false);
        if (lastArgs) {
          func(...lastArgs);
        }
      }, delay);
    } else {
      setArgs(args);
    }
  };
};

export default useThrottle;
