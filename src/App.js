import React, { useReducer } from "react";
import {
  incrementCounter,
  decrementCounter,
  updateN,
  enableButtons,
} from "./actions";
import { reducer } from "./reducers";
import { CreateStore } from "./store";

function App() {
  const store = CreateStore(reducer);
  console.log(store.getState());
  return (
    <div>
      <div>{store.getState().count}</div>
      <label>increment by n value: </label>
      <input
        onChange={(event) =>
          store.dispatch(updateN(Number(event.target.value)))
        }
        placeholder={store.getState().n}
      />
      <button
        onClick={() => store.dispatch(incrementCounter())}
        disabled={!store.getState().enabled}
      >
        Increment
      </button>
      <button
        onClick={() => store.dispatch(decrementCounter())}
        disabled={!store.getState().enabled}
      >
        Decrement
      </button>
      <button onClick={() => store.dispatch(enableButtons())}>
        {!store.getState().enabled ? "Disable" : "Enable"}
      </button>
    </div>
  );
}

export default App;
