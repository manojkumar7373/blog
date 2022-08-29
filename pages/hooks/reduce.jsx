import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      //   return state + 1;
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      //   return state - 1;
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Countertwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <button onclick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onclick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onclick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
export default Countertwo;
