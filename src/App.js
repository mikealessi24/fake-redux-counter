import React, { useReducer } from "react";
import {
  incrementCounter,
  decrementCounter,
  updateN,
  enableButtons,
} from "./actions";
import { rootReducer } from "./reducers";
import { CreateStore } from "./store";

function App() {
  const store = CreateStore(rootReducer);
  console.log(store.getState());
  return (
    <div>
      <div>{store.getState().incrementers.count}</div>
      <label>increment by n value: </label>
      <input
        onChange={(event) =>
          store.dispatch(updateN(Number(event.target.value)))
        }
        placeholder={store.getState().incrementers.n}
      />
      <button
        onClick={() => store.dispatch(incrementCounter())}
        disabled={!store.getState().enablers.enabled}
      >
        Increment
      </button>
      <button
        onClick={() => store.dispatch(decrementCounter())}
        disabled={!store.getState().enablers.enabled}
      >
        Decrement
      </button>
      <button onClick={() => store.dispatch(enableButtons())}>
        {!store.getState().enablers.enabled ? "Disable" : "Enable"}
      </button>
    </div>
  );
}

export default App;
