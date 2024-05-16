import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increament,decreament, increamentByValue, countingReducer } from './features/counter/counterSlice';
import Number from './Number';
import Users from './Users';

const App = () => {
  const counter = useSelector(countingReducer);
 const dispatch = useDispatch();
  return (
    <div>
      Counter is:{counter}
      <button onClick={()=>dispatch(increament())}>increament</button>
      <button onClick={()=>dispatch(decreament())}>decreament</button>
      <button onClick={()=>dispatch(increamentByValue(5))}>increament by value 5</button>
      <Number />
      <Users />
    </div>
  );
};

export default App;