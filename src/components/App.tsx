import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { logTestSaga } from "../store/modules/test/actions";

// const Lazy = React.lazy(() =>
//   import(/* webpackChunkName: "LazyComp" */ "./LazyComp")
// );

type ModuleType = typeof import(/* webpackChunkName: "LazyComp" */ "./LazyComp");

const Lazy = React.lazy(() => {
  return new Promise((resolve: (comp: Promise<ModuleType>) => void) => {
    setTimeout(
      () => resolve(import(/* webpackChunkName: "LazyComp" */ "./LazyComp")),
      3000
    );
  });
});

interface IApp {
  dispatch: Dispatch;
}

const Test = function({ onClick }: any) {
  return <button onClick={onClick}>test</button>;
};

export let App = ({ dispatch }: IApp) => {
  const [text, setText] = React.useState("Default");

  React.useEffect(() => {
    dispatch(logTestSaga("from App"));
  });

  const onClick = () => {
    setText("Text changed");
  };

  return (
    <>
      <div>In app</div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Lazy />
      </React.Suspense>
      <Test onClick={onClick} />
      <p>{text}</p>
    </>
  );
};
export default connect()(App);
