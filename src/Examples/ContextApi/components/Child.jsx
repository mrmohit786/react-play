import { memo } from "react";
import Context from "../context";
import GrandChild from "./GrandChild";
import GreatGrandChild from "./GreatGrandChild";

const Child = memo(() => {
  return (
    <Context.Consumer>
      {({ name }) => (
        <div className="context">
          <h4>Context API Example</h4>
          <ul>
            <li>
              <p>Child Component: word count({name.split("").length})</p>
              <ul>
                <li>
                  <GrandChild />
                  <ul>
                    <li>
                      <GreatGrandChild />
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </Context.Consumer>
  );
});

export default Child;
