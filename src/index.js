import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";
import App from "./components/App";
import movies from "./redux/reducers";

// creating a reducer here which container reducers as an object
const reducer = {
  movies,
};

// redux store
const store = configureStore({
  reducer,
});

console.log("store ", store);
console.log("BEFORE STATE ", store.getState());

store.dispatch({
  type: "ADD_MOVIES",
  movies: [{ name: "RRR" }],
});

console.log("BEFORE STATE ", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
