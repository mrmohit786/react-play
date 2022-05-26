import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { counterReducer } from "./reducer";
import { usersReducer } from "./slice";

const reducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export const store = configureStore({
  reducer,
});
