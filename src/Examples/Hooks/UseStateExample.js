import React, { createRef, useEffect, useRef, useState } from "react";
import Button from "../ForwardingRef/Button";

const UseStateExample = () => {
  const buttonEl = createRef();
  const [count, setCount] = useState(() => {
    return 0;
  });

  useEffect(() => {
    if (count === 0) buttonEl.current.disabled = true;
    else buttonEl.current.disabled = false;
  }, [buttonEl, count]);

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
      s<h3>UseStateExample</h3>
      <h3>Counter</h3>
      <div style={{ display: "flex" }}>
        <Button ref={buttonEl} onClick={() => handleCounter("Decrease")}>
          Decrease
        </Button>
        <p>{count}</p>
        <Button onClick={() => handleCounter("Increase")}>Increase</Button>
      </div>
      <div>
        <Button onClick={handleCounter}>Reset</Button>
      </div>
    </div>
  );
};

export default React.memo(UseStateExample);
