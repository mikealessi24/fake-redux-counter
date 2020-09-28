import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "DECREMENT_COUNTER") {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

const initialState = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_COUNTER" })}>
        Decrement
      </button>
    </div>
  );
}

export default App;
