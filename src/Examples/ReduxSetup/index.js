import { Provider } from "react-redux";
import Parent from "./components/Parent";
import { store } from "./store";

const ReduxHomePage = () => {
  return (
    <Provider store={store}>
      <Parent />
    </Provider>
  );
};

export default ReduxHomePage;
