import React, { useRef } from "react";

const UseRefExample = () => {
  const InputEl = useRef(null);

  const handleInputFocus = () => {
    InputEl.current.focus();
  };
  return (
    <div>
      <h4>UseRef Example</h4>
      <p>Input focus is handle by useRef hook</p>
      <input
        style={{ marginRight: "8px" }}
        placeholder="Enter Text"
        ref={InputEl}
        type="text"
        name=""
        id=""
      />
      <button onClick={handleInputFocus}>Focus</button>
    </div>
  );
};

export default UseRefExample;
