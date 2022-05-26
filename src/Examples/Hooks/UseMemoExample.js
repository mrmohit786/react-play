import React, { useEffect, useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const autoIncrementCount = () => {
    let timeout;
    if (count < 10) {
      timeout = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 2000);
    } else {
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  };

  useEffect(autoIncrementCount, [count]);

  const displayCount = useMemo(() => {
    console.log("MemoRunning");
    return count * 10
  }, [count]);

  return (
    <div>
      <h3>UseMemoExample</h3>
      <p>count: {displayCount}</p>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>name: {name}</p>
    </div>
  );
};

export default UseMemoExample;
