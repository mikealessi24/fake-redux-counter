import React, { useReducer } from "react";
import {
  incrementCounter,
  decrementCounter,
  updateN,
  enableButtons,
} from "./actions";
import { reducer } from "./reducers";

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
