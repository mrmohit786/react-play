import { memo, useContext } from "react";
import context from "../context";

const GrandChild = memo(() => {
  const { name } = useContext(context);
  return <p>Grand Child Component: {name}</p>;
});

export default GrandChild;
