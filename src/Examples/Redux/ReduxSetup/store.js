import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer, userReducer } from "./reducer";

const rootReducer = combineReducers({
  count: counterReducer,
  users: userReducer,
});

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);

export const store = createStore(rootReducer, composeWithDevTools(middleware));
