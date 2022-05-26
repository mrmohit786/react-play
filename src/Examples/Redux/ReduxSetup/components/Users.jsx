import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomUserAction } from "../action";

const Users = memo(() => {
  const dispatch = useDispatch();
  const {
    users: { users },
    count: { count },
  } = useSelector((state) => state);

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
    </div>
  );
});

export default Users;
