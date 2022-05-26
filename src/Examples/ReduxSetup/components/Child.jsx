import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomUserAction } from "../action";

const Child = memo(() => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getRandomUserAction);
  }, [dispatch]);

  return (
    <div>
      <p>Users</p>
      {users && users.map((user) => <p key={user.id}>{user.email}</p>)}
    </div>
  );
});

export default Child;
