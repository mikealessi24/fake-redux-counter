import React, { useReducer } from "react";

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const UPDATE_N = "UPDATE_N";

function incrementCounter(n) {
  return {
    type: INCREMENT_COUNTER,
    n: n,
  };
}

function decrementCounter(n) {
  return {
    type: DECREMENT_COUNTER,
    n: n,
  };
}

function updateN(n) {
  return {
    type: UPDATE_N,
    n: n,
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + state.n };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - state.n };
    case UPDATE_N:
      return { ...state, n: action.n };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  n: 1,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div>{state.count}</div>
      <label>increment by n: </label>
      <input
        onChange={(event) => dispatch(updateN(Number(event.target.value)))}
        placeholder="Default n = 1"
      />
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
}

export default App;
