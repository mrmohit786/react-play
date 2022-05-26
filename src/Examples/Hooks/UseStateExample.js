import React, { createRef, useEffect, useState } from "react";
import Button from "../ForwardingRef/Button";

const UseStateExample = () => {
  const buttonRef = createRef();
  const [count, setCount] = useState(() => {
    return 0;
  });

  useEffect(() => {
    if (count === 0) buttonRef.current.disabled = true;
    else buttonRef.current.disabled = false;
  }, [buttonRef, count]);

  const handleCounter = (type) => {
    switch (type) {
      case "Increase":
        setCount(count + 1);
        break;
      case "Decrease":
        setCount((prevCount) => prevCount - 1);
        break;
      default:
        setCount(0);
        break;
    }
  };

  return (
    <div>
      <h4>UseState Example</h4>
      <p>Counter: {count}</p>
      <Button
        style={{ marginRight: "8px" }}
        ref={buttonRef}
        onClick={() => handleCounter("Decrease")}
      >
        Decrease
      </Button>
      <button
        style={{ backgroundColor: "red", marginRight: "8px" }}
        onClick={handleCounter}
      >
        Reset
      </button>
      <button onClick={() => handleCounter("Increase")}>Increase</button>
      <p>
        <strong>Decrease</strong> button is using forward Ref concept.
      </p>
    </div>
  );
};

export default React.memo(UseStateExample);
