import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducers from "./redux/Reducers";

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger))
);
