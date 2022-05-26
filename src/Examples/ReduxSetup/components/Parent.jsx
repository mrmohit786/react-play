import { useDispatch } from "react-redux";
import { decrementAction, incrementAction } from "../action";
import AnotherChild from "./AnotherChild";
import Child from "./Child";

const Parent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button onClick={() => dispatch(incrementAction)}>Increment</button>
        <button onClick={() => dispatch(decrementAction)}>Decrement</button>
      </div>
      <Child />
      <AnotherChild />
    </>
  );
};

export default Parent;
