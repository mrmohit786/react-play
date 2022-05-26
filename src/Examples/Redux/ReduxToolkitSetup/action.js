import { createAction } from "@reduxjs/toolkit";
import { addUser } from "./slice";

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");

export const fetchUser = (limit = 1) => async (dispatch) => {
  try {
    const res = await fetch(`https://random-data-api.com/api/users/random_user?size=${limit}`);
    const data = await res.json();
    dispatch(addUser(data));
  } catch (err) {
    console.log("error: ", err);
  }
};
