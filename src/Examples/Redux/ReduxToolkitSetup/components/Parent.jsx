import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchUser, increment, reset } from "../action";

const Parent = () => {
  const { value } = useSelector((state) => state.counter);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(value));
  }, [dispatch, value]);

  return (
    <div>
      <h4>Redux Toolkit Setup</h4>
      <button
        disabled={value === 1}
        style={{ marginRight: "8px" }}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        style={{ backgroundColor: "red", marginRight: "8px" }}
        onClick={() => dispatch(reset(1))}
      >
        Reset
      </button>
      <button disabled={value === 10} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <br />
      <p>Random users (limit: {value})</p>
      <ul>
        {users.map((user) => (
          <li>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parent;
