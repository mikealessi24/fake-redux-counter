import React, { useReducer } from "react";
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPDATE_N,
  ENABLE_BUTTONS,
  incrementCounter,
  decrementCounter,
  updateN,
  enableButtons,
} from "./actions";

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
      <label>increment by n value: </label>
      <input
        onChange={(event) => dispatch(updateN(Number(event.target.value)))}
        placeholder={state.n}
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
