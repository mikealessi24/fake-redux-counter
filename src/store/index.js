import React, { useReducer } from "react";

const initialState = {
  count: 0,
  n: 1,
  enabled: true,
};

export function CreateStore(reducer) {
  const [state, dispatch] = useReducer(reducer, initialState);
  function getState() {
    return { ...state };
  }
  return { getState, dispatch };
}
