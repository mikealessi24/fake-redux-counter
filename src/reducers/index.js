import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPDATE_N,
  ENABLE_BUTTONS,
} from "../actions";

const initialState = {
  count: 0,
  n: 1,
  enabled: true,
};

const incrementerReducer = (state = { count: 0, n: 1 }, action) => {
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

const enableReducer = (state = { enabled: true }, action) => {
  switch (action.type) {
    case ENABLE_BUTTONS:
      return { ...state, enabled: !state.enabled };
    default:
      return state;
  }
};

export function rootReducer(state = {}, action) {
  return {
    incrementers: incrementerReducer(state.incrementers, action),
    enablers: enableReducer(state.enablers, action),
  };
}
