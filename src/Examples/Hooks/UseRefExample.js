import React, { useRef } from "react";

const UseRefExample = () => {
  const InputEl = useRef(null);

  const handleInputFocus = () => {
    InputEl.current.focus();
  };
  return (
    <div>
      <h3>UseRefExample</h3>
      <input ref={InputEl} type="text" name="" id="" />
      <button onClick={handleInputFocus}>Focus</button>
    </div>
  );
};

export default UseRefExample;
