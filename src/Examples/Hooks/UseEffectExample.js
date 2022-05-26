import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    let timeout;
    if (count < 10) {
      timeout = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [count, delay]);

  return (
    <div>
      <h4>UseEffect Example</h4>
      <input
        type="number"
        placeholder="Enter delay (seconds)"
        onChange={(e) => setDelay(e.target.value * 1000)}
      />
      <p>
        Auto Increment ({delay / 1000} seconds): {count}
      </p>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default UseEffectExample;
