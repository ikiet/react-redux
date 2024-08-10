import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  show: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, payload) {
      const amount = payload.payload?.amount ?? 1;
      state.counter += amount;
    },
    decrement(state, payload) {
      const amount = payload.payload?.amount ?? 1;
      state.counter -= amount;
    },
    toggleCounter(state) {
      state.show = !state.show;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export default store;
