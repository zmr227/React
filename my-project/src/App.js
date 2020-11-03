import React from "react";
import "./App.css";
import ThemeContext from "./ThemeContext";
import Components from "./components";
import { Button, Container } from "react-bootstrap";

const tags = ["x", "y"];
const themes = {
  light: {
    variant: "light",
    bgColor: "#eee",
    color: "#000",
  },
  dark: {
    variant: "dark",
    bgColor: "#222",
    color: "#fff",
  },
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ["one", "two"],
      theme: "light",
    };
    this.addComment = this.addComment.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  render() {
    const { comments } = this.state;
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <Container>
          <Components.NameCard
            name="king"
            phone="123456789"
            isHuman={true}
            tags={tags}
          />
          <br />
          <Components.LikeButton />
          <hr />
          <>
            <Button
              onClick={() => {
                this.toggleTheme("light");
              }}
            >
              Light
            </Button>{" "}
            <Button
              onClick={() => {
                this.toggleTheme("dark");
              }}
            >
              Dark
            </Button>
          </>

          <br />
          <br />
          <Components.ThemedBar />
          <hr />
          <Components.DigitalClock />
          <hr />
          <Components.CommentList comments={comments} />
          <br />
          <Components.CommentBox
            commentNumber={comments.length}
            onAddComment={this.addComment}
          />
        </Container>
      </ThemeContext.Provider>
    );
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  }

  toggleTheme(theme) {
    this.setState({
      theme,
    });
  }
}

export default App;
