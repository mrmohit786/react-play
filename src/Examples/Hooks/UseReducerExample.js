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
      <h4>UseReducer Example</h4>
      <p>Counter: {state.count}</p>
      <button
        style={{ marginRight: "8px" }}
        disabled={state.count === 0}
        onClick={() => dispatch({ type: "Decrement" })}
      >
        Decrement
      </button>
      <button
        style={{ marginRight: "8px", backgroundColor: "red" }}
        onClick={() => dispatch({ type: null })}
        disabled={state.count === 0}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
    </div>
  );
};

export default UseReducerExample;
