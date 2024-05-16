import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increament,decreament } from './features/counter/counterSlice';

const App = () => {
  const counter = useSelector(store => store.counter.counterValue);
 const dispatch = useDispatch();
  return (
    <div>
      Counter is:{counter}
      <button onClick={()=>dispatch(increament())}>increament</button>
      <button onClick={()=>dispatch(decreament())}>decreament</button>
    </div>
  );
};

export default App;