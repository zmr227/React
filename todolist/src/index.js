import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList"; // auto fill with App.js
import Test from "./test";
import NewTodoList from "./NewTodoList";
//import * as serviceWorker from './serviceWorker';

// bond app component to 'root'
ReactDOM.render(<NewTodoList />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
