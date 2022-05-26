import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment, reset } from "./action";

const initialState = {
  value: 1,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, { payload = 1 }) => {
    return { ...state, value: state.value + payload };
  });
  builder.addCase(decrement, (state, { payload = 1 }) => {
    return { ...state, value: state.value - payload };
  });
  builder.addCase(reset, (state) => {
    return { ...state, value: 1 };
  });
});
