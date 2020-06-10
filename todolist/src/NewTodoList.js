import React, { Component } from "react";

import store from "./store/index";
import NewTodoListUI from "./NewTodoListUI";
import axios from "axios";

import {
  getInputChangeAction,
  getAddTodoItem,
  getDeleteTodoItem,
  initTodoList
} from "./store/actionCreators";

class NewTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <NewTodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  componentDidMount() {
    // axios.get("/api/todolist").then(res => {
    //   const data = res.data;
    //   const action = InitTodoList(data);
    //   store.dispatch(action);
    // });
    // // Middleware
    const action = initTodoLists();
    store.dispatch(action); // action func will be auto executed
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddTodoItem();
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState);
  }

  handleDeleteItem(index) {
    const action = getDeleteTodoItem(index);
    store.dispatch(action);
  }
}
export default NewTodoList;
