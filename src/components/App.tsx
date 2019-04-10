import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { logTestSaga } from "../store/modules/test/actions";

interface IApp {
  dispatch: Dispatch;
}

export let App = ({ dispatch }: IApp) => {
  React.useEffect(() => {
    dispatch(logTestSaga("from App"));
  });
  return <div>In app</div>;
};
export default connect()(App);
