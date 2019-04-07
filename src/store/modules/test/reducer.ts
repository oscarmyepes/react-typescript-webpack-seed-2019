import { IAction } from "./actions";

export function testReducer(store = {}, action: IAction) {
  switch (action.type) {
    case "LOG_TEST":
      return {
        ...store,
        text: action.payload.text
      };

    default:
      return store;
  }
}
