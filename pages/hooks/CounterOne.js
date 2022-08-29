import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    //   return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return state - 1;
    //   return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function Counterone() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button onclick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onclick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onclick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
export default Counterone;
