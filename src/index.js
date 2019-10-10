import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import { routerMiddleware } from "react-router-redux";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import configureStore from "./store/ConfigureStore";

const history = createHistory(); //configuramos history
const middleware = routerMiddleware(history); //configuramos middleware
const store = configureStore(middleware); //asignamos middleware

/*const container = document.getElementById("app");
ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  container
);*/

const container = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
