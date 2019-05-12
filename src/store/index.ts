import { applyMiddleware, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: Middleware[]) => {
  return composeWithDevTools(applyMiddleware(...middleware));
};

const store = createStore(reducer, {}, bindMiddleware([sagaMiddleware]));

sagaMiddleware.run(rootSaga);

export { store };
