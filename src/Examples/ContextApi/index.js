import React from "react";
import Context from "./context";
import Child from "./components/Child";

/**
 * Context API using Functional Component
 */
// const ContextApiUseCase = () => {
//   const [name, setName] = useState("Hello from functional Component");
//   const data = { name, setName };
//   return (
//     <Context.Provider value={data}>
//       <Child />
//     </Context.Provider>
//   );
// };

// export default React.memo(ContextApiUseCase);


import { Component } from "react";

/**
 * Context API using Class Component
 */
export default class ContextApiUseCase extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hello from functional Component",
      setName: this.setName,
    };
  }

  setName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <Child />
      </Context.Provider>
    );
  }
}
