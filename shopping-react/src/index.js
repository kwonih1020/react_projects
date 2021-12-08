import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let alertState = true;

function reducer2(state = alertState, action) {
  if (action.type === "close") {
    return (state = false);
    return state;
  } else {
    return state;
  }
}

let initialState = [
  { id: 0, name: "Nike Airforce", quan: 2 },
  { id: 1, name: "Adidas Cloud", quan: 1 },
];
function reducer(state = initialState, action) {
  if (action.type === "order") {
    let found = state.findIndex((a) => {
      return a.id === action.data.id;
    });
    if (found >= 0) {
      let copyState = [...state];
      copyState[found].quan++;
      return copyState;
    } else {
      let copyState = [...state];
      copyState.push(action.data);
      return copyState;
    }
  } else if (action.type === "addOrder") {
    let copyState = [...state];
    copyState[action.data].quan++;
    return copyState;
  } else if (action.type === "deleteOrder") {
    let copyState = [...state];
    copyState[action.data].quan--;
    return copyState;
  } else {
    return state;
  }
}
let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
