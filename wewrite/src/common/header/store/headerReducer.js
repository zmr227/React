import * as types from "./constants";
import { fromJS } from "immutable";

// make state into an immutable object, so it cannot be changed
const defaultState = fromJS({
  focused: false,
});

export default (state = defaultState, action) => {
  if (action.type === types.SEARCH_FOCUSED) {
    return state.set("focused", true);
    //focused: true,
  } else if (action.type === types.SEARCH_BLUR) {
    return state.set("focused", false); //{focused: false };
  }
  return state;
};
