import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useThrottle from "../../../Hooks/Custom/useThrottle";
import { getRandomUserAction } from "../action";

const Users = memo(() => {
  const dispatch = useDispatch();
  const {
    users: { users },
    count: { count },
  } = useSelector((state) => state);
  const throttleFetchUser = useThrottle(() => {
    dispatch(getRandomUserAction(count));
  }, 2000);

  useEffect(() => {
    dispatch(getRandomUserAction(count));
  }, [dispatch, count]);

  return (
    <div>
      <p>Random users (limit: {count})</p>
      <ul>
        {users &&
          users.length &&
          users.map((user) => (
            <li>
              <p key={user.id}>{user.email}</p>
            </li>
          ))}
        {!users && <p>No users are available</p>}
      </ul>
      <button style={{ width: "100px" }} onClick={throttleFetchUser}>
        Fetch Again
      </button>
      <p>Uses throttle concept</p>
    </div>
  );
});

export default Users;
