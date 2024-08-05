import { createStore } from "redux";

const store = createStore(
  (
    state = {
      counter: 0,
      showCounter: true,
    },
    action,
  ) => {
    if (action.type === "increment") {
      const amount = action.amount ?? 1;
      return {
        ...state,
        counter: state.counter + amount,
      };
    }
    if (action.type === "decrement") {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    if (action.type === "toggle-counter") {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    }
    return state;
  },
);

export default store;
