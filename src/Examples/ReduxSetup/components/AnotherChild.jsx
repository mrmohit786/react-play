import { useSelector } from "react-redux";

const AnotherChild = () => {
  const { count } = useSelector((state) => state.count);
  return <div>{count}</div>;
};

export default AnotherChild;
