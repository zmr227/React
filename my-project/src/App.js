import React from "react";
import "./App.css";
import NameCard from "./components/NameCard";
import LikeButton from "./components/LikeButton";

const tags = ["x", "dfs"];
class App extends React.Component {
  render() {
    return (
      <div>
        <NameCard name="king" phone="123456789" isHuman={true} tags={tags} />
        <LikeButton />
      </div>
    );
  }
}

export default App;
