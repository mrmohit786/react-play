import { memo } from "react";
import Context from "../context";

const GreatGrandChild = memo(() => (
  <Context.Consumer>
    {({ name, setName }) => (
      <div>
        <span>Great Grand Child: </span>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    )}
  </Context.Consumer>
));

export default GreatGrandChild;
