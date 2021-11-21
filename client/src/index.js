import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

//미들웨어와 함께 스토어 만듦
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

//유지
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

ReactDOM.render(
  <Provider
    //스토어 만든거를 store에 넣어줌
    store={createStoreWithMiddleware(
      Reducer,
      INITIAL_STATE,
      composeWithDevTools()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
