import React, { Component, Fragment } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import ThemeContext from "../ThemeContext";

class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  // refresh every 1 second.
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  // exec when component updates
  componentDidUpdate(curProps, curState) {
    //console.log(curState);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          return (
            <Jumbotron
              fluid
              style={{ backgroundColor: theme.bgColor, color: theme.color }}
            >
              <Container>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
              </Container>
            </Jumbotron>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default DigitalClock;
