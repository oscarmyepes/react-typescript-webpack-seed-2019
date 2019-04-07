import { combineReducers } from "redux";
import { testReducer } from "./modules/test/reducer";

export default combineReducers({
  test: testReducer
});
