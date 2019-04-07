import { all } from "redux-saga/effects";
import { watchLogTest } from "./modules/test/saga";

export default function* rootSaga() {
  yield all([watchLogTest()]);
}
