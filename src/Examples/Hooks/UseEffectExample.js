import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  const autoIncrementCount = () => {
    let timeout;
    if (count < 10) {
      timeout = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }

  useEffect(autoIncrementCount, [count]);

  return (
    <div>
      <h3>UseEffectExample</h3>
      <p>{count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default UseEffectExample;
