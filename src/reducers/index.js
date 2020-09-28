import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPDATE_N,
  ENABLE_BUTTONS,
} from "../actions";

export const reducer = (state, action) => {
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
