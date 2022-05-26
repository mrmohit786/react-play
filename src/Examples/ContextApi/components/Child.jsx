import { memo } from "react";
import Context from "../context";
import GrandChild from "./GrandChild";
import GreatGrandChild from "./GreatGrandChild";

const Child = memo(() => {
  return (
    <Context.Consumer>
      {({ name }) => (
        <>
          <p>
            Value from Child: {name} <span>(render through context)</span>
          </p>
          <GrandChild />
          <GreatGrandChild />
        </>
      )}
    </Context.Consumer>
  );
});

export default Child;
