import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction, resetAction } from "../action";
import Users from "./Users";

const Parent = () => {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Simple Redux Setup</h4>
      <button
        disabled={count === 1}
        style={{ marginRight: "8px" }}
        onClick={() => dispatch(decrementAction)}
      >
        Decrement
      </button>
      <button
        style={{ backgroundColor: "red", marginRight: "8px" }}
        onClick={() => dispatch(resetAction)}
      >
        Reset
      </button>
      <button
       disabled={count === 100}
      onClick={() => dispatch(incrementAction)}>Increment</button>
      <br />
      <Users />
    </div>
  );
};

export default Parent;
