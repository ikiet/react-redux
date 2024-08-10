import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.show);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };

  const onIncrementBy5 = () => {
    dispatch(
      counterActions.increment({
        amount: 5,
      }),
    );
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
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
