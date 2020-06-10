import React from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import Header from "./common/header";
import store from "./store";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
