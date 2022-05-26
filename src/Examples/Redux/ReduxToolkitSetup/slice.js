import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser } = usersSlice.actions;
