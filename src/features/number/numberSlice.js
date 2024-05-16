import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 5,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increament: (state) => {
      state.number++;
    },
    decreament: (state) => {
      state.number--;
    },
  },
});

export default numberSlice.reducer;
export const { increament, decreament } = numberSlice.actions;
export const numberingReducer = (state) => state.number.number;
