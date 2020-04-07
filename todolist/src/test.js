import React, { Component } from "react";
import "./test.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames="fade"
                appear={true}
                unmountOnExit
                onEntered={el => {
                  el.style.color = "blue";
                }}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>Add</button>
      </React.Fragment>
    );
  }

  handleAddItem() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, "item"]
      };
    });
  }
}

export default Test;
