import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./redux/todos-redux";
import { Provider } from "react-redux";
import counter from "./redux/counter-redux";

const store = configureStore({
  reducer: {
    counter,
    todos: todosReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
