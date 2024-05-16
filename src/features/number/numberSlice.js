import { createSlice } from "@reduxjs/toolkit";
import { increament as increamentCounter } from "../counter/counterSlice";

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
  extraReducers: (builder) => {
    builder.addCase(increamentCounter,(state)=>{
        state.number++
    })
  },
});

export default numberSlice.reducer;
export const { increament, decreament } = numberSlice.actions;
export const numberingReducer = (state) => state.number.number;
