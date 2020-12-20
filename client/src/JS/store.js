import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(reducer, compose(applyMiddleware(thunk), devTools));

export default store;
