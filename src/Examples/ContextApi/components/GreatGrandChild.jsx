import { memo } from "react";
import Context from "../context";

const GreatGrandChild = memo(() => (
  <Context.Consumer>
    {({ name, setName }) => (
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    )}
  </Context.Consumer>
));

export default GreatGrandChild;
