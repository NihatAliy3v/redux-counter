import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counter.action";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterData.counter);
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <div>{counter}</div>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
