import React from "react";
import { connect } from "react-redux";
import { counterTypes } from "../redux/constants/counterTypes.action";
// import store from "../redux/store/store";

const CounterComponent = (props) => {
  // const increment = () => {
  //   store.dispatch({ type: counterTypes.INCREMENT });
  // };

  return (
    <div className="border border-grey-500 shadow-lg w-96 mt-4 m-auto rounded-md text-center ">
      <p className="m-1 p-2 text-2xl">Counter : {props.count} </p>
      <button
        onClick={props.increment}
        className="m-3 bg-grey-light border border-black hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span>Counter Plus</span>
      </button>
      <button
        onClick={props.decrement}
        className="m-3 bg-grey-light border border-black hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span>Counter Minus</span>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    count: state.counterReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: counterTypes.INCREMENT }),
    decrement: () => dispatch({ type: counterTypes.DECREMENT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
