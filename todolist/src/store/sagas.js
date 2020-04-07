import { put, take } from "redux-saga/effects";
import { INIT_TODO_LIST } from "./actionType";
import { initTodoList } from "./actionCreators";
import axios from "axios";

// generator func
function* getInitList() {
  try {
    const res = yield axios.get("/api/todolist");
    const action = initTodoList(res.data);
    console.log(action.type);
    yield put(action);
  } catch (e) {
    console.log("failed");
  }
}

function* mySaga() {
  yield take(INIT_TODO_LIST, getInitList);
}

export default mySaga;
