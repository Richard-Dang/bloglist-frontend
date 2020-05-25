import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import blogReducer from "./reducers/blogReducer";
import store from "./store";

console.log("blogReducerIndex", blogReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
