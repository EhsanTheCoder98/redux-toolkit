import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberingReducer } from "./features/number/numberSlice";
import { increament, decreament } from "./features/number/numberSlice";

const Number = () => {
  const number = useSelector(numberingReducer);
  const dispatch = useDispatch();
  return (
    <div>
      number is:{number}
      <button onClick={()=>dispatch(increament())}>increament</button>
      <button onClick={()=>dispatch(decreament())}>decreament</button>
    </div>
  );
};

export default Number;
