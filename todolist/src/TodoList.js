import React, { Component } from "react";

class TodoList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      input: "write down todo",
      list: [
        "Call Zhubenben",
        "Play dont starve together",
        "Learn React",
        "Keep"
      ]
    };
  }
  render() {
    return (
      <div>
        <div>
          {/* how to write comment in JSX */}
          <input 
            className="input"
            value={this.state.input}
            onChange={this.handleInputChange.bind(this)}
          ></input>
          <button onClick={this.handleBtnClick.bind(this)}>Submit</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            // use index as key, so that every item has diff key
            return (
              <li key={index} onClick={this.handleItemDelete.bind(this, index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  handleItemDelete(index) {
    // 通过拷贝副本修改list而非直接操作state
    const new_list = this.state.list;
    new_list.splice(index, 1);
    this.setState({
      list: new_list
    });
  }
}
export default TodoList;
