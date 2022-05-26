import React from "react";
import { Provider } from "react-redux";
import Parent from "./components/Parent";
import { store } from "./store";

const ReduxToolkitSetup = () => {
  return (
    <Provider store={store}>
      <Parent />
    </Provider>
  );
};

export default ReduxToolkitSetup;
