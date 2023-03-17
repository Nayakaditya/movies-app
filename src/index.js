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
console.log("State ", store.getState());
// console.log("STATE ", store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
