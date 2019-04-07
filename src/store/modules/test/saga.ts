import { put, takeLatest } from "redux-saga/effects";
import { ActionName, IAction, logTest } from "./actions";

function* logTestSaga(action: IAction) {
  yield put(logTest(action.payload.text));
}

function* watchLogTest() {
  const actionName: ActionName = "LOG_TEST_SAGA";
  yield takeLatest(actionName, logTestSaga);
}

export { watchLogTest };
