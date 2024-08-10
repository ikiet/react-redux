import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  show: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
