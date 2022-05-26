export const incrementAction = (dispatch) => {
  dispatch({ type: "INCREMENT" });
};

export const decrementAction = (dispatch) => {
  dispatch({ type: "DECREMENT" });
};

export const getRandomUserAction = async (dispatch) => {
  try {
    const res = await fetch(
      "https://random-data-api.com/api/users/random_user?size=3",
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
