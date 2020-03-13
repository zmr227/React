import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      input: "placeholder",
      list: [
        "Call Zhubenben",
        "Play dont starve together",
        "Learn React",
        "Keep"
      ]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    return (
      <div>
        <div>
          {/* how to write comment in JSX */}
          <label htmlFor="inputArea">Create Todos</label>
          <input
            id="inputArea"
            className="input"
            value={this.state.input}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleBtnClick}>Submit</button>
        </div>
        <ul>
          {// use index as key, so that every item has diff key
          this.getTodoItems()}
        </ul>
      </div>
    );
  }

  getTodoItems() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}> 
         {/* 
            需要一个unique key来区分每一次map出来的结果，加在最外层的wrapper。
            使用index作为key并不是理想选择，可能造成错误。
            
          */ }
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
          {/*<li
                key={index}
                onClick={this.handleItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}
              ></li> */}
        </div>
      );
    });
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      input: value
    }));
  }

  handleBtnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.input],
      input: ""
    }));
  }

  handleItemDelete(index) {
    // 通过拷贝副本修改list而非直接操作state

    this.setState(prevState => {
      const new_list = prevState.list;
      new_list.splice(index, 1);
      return { list: new_list };
    });
  }
}

// export so that this component can be imported by other files
export default TodoList;
