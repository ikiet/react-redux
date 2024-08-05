import { Component } from "react";
import classes from "./Counter.module.css";
import { connect } from "react-redux";

class Counter extends Component {
  toggleCounterHandler = () => {};

  onIncrement = () => {
    this.props.increment();
  };

  onDecrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <button onClick={this.onIncrement.bind(this)}>Increment</button>
        <button onClick={this.onDecrement.bind(this)}>Decrement</button>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () =>
      dispatch({
        type: "increment",
      }),
    decrement: () =>
      dispatch({
        type: "decrement",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
