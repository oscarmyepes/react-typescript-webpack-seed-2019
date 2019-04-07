export type ActionName = "LOG_TEST_SAGA" | "LOG_TEST";

interface IActionType {
  type: ActionName;
}

export interface IAction extends IActionType {
  payload: { text: string };
}

export function logTestSaga(text: string): IAction {
  return {
    type: "LOG_TEST_SAGA",
    payload: { text }
  };
}

export function logTest(text: string): IAction {
  return {
    type: "LOG_TEST",
    payload: { text }
  };
}
