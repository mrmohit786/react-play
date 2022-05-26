export const incrementAction = (dispatch) => {
  dispatch({ type: "INCREMENT" });
};

export const decrementAction = (dispatch) => {
  dispatch({ type: "DECREMENT" });
};

export const resetAction = (dispatch) => {
  dispatch({ type: "RESET" });
};

export const getRandomUserAction = (size = 3) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://random-data-api.com/api/users/random_user?size=${size}`,
      { method: "GET" }
    );
    const data = await res.json();
    dispatch({ type: "ADD_USER", payload: data });
  } catch (err) {
    console.log("error: ", err);
  }
};
// Use this if not using redux-thunk
// export const incrementAction = { type: "INCREMENT" };

// export const decrementAction = { type: "DECREMENT" };
