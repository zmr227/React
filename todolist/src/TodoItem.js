import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // 减少不必要的重复渲染，提升性能
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) return true;
    else return false;
  }

  render() {
    // 外部传入的数据可以做结构赋值，美化代码
    const { content, test } = this.props;
    return (
      <div onClick={this.handleClick}>
        {test} {content}
      </div>
    );
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
};

// 如果父组件没有传入这个值，为其设置一个default value
TodoItem.defaultProps = {
  test: "to do:"
};

export default TodoItem;
