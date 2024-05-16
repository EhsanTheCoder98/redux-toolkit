import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "counte",
  initialState,
  reducers: {
    increament: (state) => {
      state.counterValue++;
    },
    decreament: (state) => {
      state.counterValue--;
    },
    increamentByValue: (state, action) => {
      state.counterValue += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increament, decreament, increamentByValue } =
  counterSlice.actions;
export const countingReducer = (store) => store.counter.counterValue;
