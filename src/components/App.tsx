import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { logTestSaga } from "../store/modules/test/actions";

// const Lazy = React.lazy(() =>
//   import(/* webpackChunkName: "LazyComp" */ "./LazyComp")
// );

const Lazy = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve(import(/* webpackChunkName: "LazyComp" */ "./LazyComp") as any),
      3000
    );
  });
});

interface IApp {
  dispatch: Dispatch;
}

export let App = ({ dispatch }: IApp) => {
  React.useEffect(() => {
    dispatch(logTestSaga("from App"));
  });
  return (
    <div>
      In app
      <React.Suspense fallback={<div>Loading...</div>}>
        <Lazy />
      </React.Suspense>
    </div>
  );
};
export default connect()(App);
