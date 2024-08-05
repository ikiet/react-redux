import { createStore } from "redux";

const store = createStore(
  (
    state = {
      counter: 0,
    },
    action,
  ) => {
    if (action.type === "increment") {
      const amount = action.amount ?? 1;
      return {
        counter: state.counter + amount,
      };
    }
    if (action.type === "decrement") {
      return {
        counter: state.counter - 1,
      };
    }
    return state;
  },
);

export default store;
