import React, { PureComponent } from "react";
import Context from "./context";
import Child from "./components/Child";

// Context API using Functional Component

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

// Context API using Class Component
export default class ContextApiUseCase extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
