import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_TODO_LIST,
  
} from "./actionType";

const defaultState = { inputValue: "", list: [] };

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
  } else if (action.type === ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
  } else if (action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1);
  } else if (action.type === INIT_TODO_LIST) {
    newState.list = action.data;
  } 
  return newState;
};
