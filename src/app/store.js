import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import numberSlice from "../features/number/numberSlice";

const store = configureStore({
  reducer: { counter: counterSlice ,number:numberSlice },
});
export default store;
