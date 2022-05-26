export const counterReducer = (state = { count: 0 }, { type }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const userReducer = (state = { users: [] }, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      return { ...state, users: payload };
    default:
      return state;
  }
};
