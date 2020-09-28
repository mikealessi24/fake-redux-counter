import React, { useReducer } from "react";

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const UPDATE_N = "UPDATE_N";
export const ENABLE_BUTTONS = "ENABLE_BUTTONS";

export function incrementCounter(n) {
  return {
    type: INCREMENT_COUNTER,
    n: n,
  };
}

export function decrementCounter(n) {
  return {
    type: DECREMENT_COUNTER,
    n: n,
  };
}

export function updateN(n) {
  return {
    type: UPDATE_N,
    n: n,
  };
}

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS,
  };
}
