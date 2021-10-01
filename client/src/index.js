import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

//style
import "./styles/index.scss";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);