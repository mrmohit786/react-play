import React, { useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return { count: 0 };
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>UseReducerExample</h3>
      <p onClick={() => dispatch({ type: "Decrement" })}>Decrement</p>
      <p onClick={() => dispatch({ type: undefined })}>
        {state && state.count}
      </p>
      <p onClick={() => dispatch({ type: "Increment" })}>Increment</p>
    </div>
  );
};

export default UseReducerExample;
