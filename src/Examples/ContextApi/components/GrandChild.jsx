import { memo, useContext } from "react";
import context from "../context";

const GrandChild = memo(() => {
  const { name } = useContext(context);
  return (
    <p>
      Value from GrandChild: {name} <span>(render through context)</span>
    </p>
  );
});

export default GrandChild;
