import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [value, setValue] = useState(1);
  const randomNumber = useMemo(() => Math.floor(value * 100), [value]);

  return (
    <div>
      <h4>UseMemo Example</h4>
      <input
        type="number"
        placeholder="Enter any number"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Calculated value: {randomNumber}</p>
    </div>
  );
};

export default UseMemoExample;
