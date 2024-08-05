import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle-counter" });
  };

  const onIncrement = () => {
    dispatch({ type: "increment" });
  };

  const onIncrementBy5 = () => {
    dispatch({ type: "increment", amount: 5 });
  };

  const onDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onIncrementBy5}>Increment by 5</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
