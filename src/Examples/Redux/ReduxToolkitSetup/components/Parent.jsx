import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchUser, increment } from "../action";

const Parent = () => {
  const { value } = useSelector((state) => state.counter);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <h3>Redux Toolkit setup</h3>
      <p></p>
      <ul>
        <li></li>
      </ul>
      <h4>Counter Example</h4>
      <p>{value}</p>
      <div>
        <button onClick={() => dispatch(decrement(5))}>Decrement</button>
        <button onClick={() => dispatch(increment(10))}>Increment</button>
        <h4>User fetch</h4>
        <ul>
          {users.map((user) => (
            <li>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Parent;
