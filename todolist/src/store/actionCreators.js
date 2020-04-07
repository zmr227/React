import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_TODO_LIST,
  SAGA_GET_INIT_LIST
} from "./actionType";

// import axios from "axios";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteTodoItem = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initTodoList = data => ({
  type: INIT_TODO_LIST,
  data
});

// export const sagaGetInitList = () => ({
//   type: SAGA_GET_INIT_LIST
// });

// // redux-thunk middleware
// export const getTodoList = () => {
//   return dispatch => {
//     // pass in store.dispatch function
//     axios.get("/api/todolist").then(res => {
//       const data = res.data;
//       const action = InitTodoList(data);
//       dispatch(action);
//       console.log(data);
//     });
//     //.catch();
//   };
// };
