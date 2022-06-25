import { combineReducers } from "redux";
import modal from "./modal";
import user from "./user"

const rootReducers = combineReducers({
  modal,
  user
});
export default rootReducers;
