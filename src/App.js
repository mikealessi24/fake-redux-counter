import React, { useReducer } from "react";

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
}

export default App;
