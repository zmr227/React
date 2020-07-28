import React from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../ThemeContext";

const ThemedBar = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <div style={{ backgroundColor: theme.bgColor, color: theme.color }}>
            Themed Bar
            <br />
            <br />
            <Button variant={theme.variant}>Themed Button</Button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemedBar;
