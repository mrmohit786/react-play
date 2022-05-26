import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment } from "./action";

const initialState = {
  value: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, { payload }) => {
    return { ...state, value: state.value + payload };
  });
  builder.addCase(decrement, (state, { payload }) => {
    return { ...state, value: state.value - payload };
  });
});
