import React, { useReducer } from "react";

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const UPDATE_N = "UPDATE_N";
const ENABLE_BUTTONS = "ENABLE_BUTTONS";

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

function enableButtons() {
  return {
    type: ENABLE_BUTTONS,
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
    case ENABLE_BUTTONS:
      return { ...state, enabled: !state.enabled };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  n: 1,
  enabled: true,
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
      <button
        onClick={() => dispatch(incrementCounter())}
        disabled={!state.enabled}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrementCounter())}
        disabled={!state.enabled}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(enableButtons())}>
        {state.enabled ? "Disable" : "Enable"}
      </button>
    </div>
  );
}

export default App;
