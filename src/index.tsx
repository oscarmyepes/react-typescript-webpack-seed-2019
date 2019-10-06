import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router } from "react-router";
import IndexPage from "./pages/Index";
import { store } from "./store/index";

const rootElement = document.getElementById("root");
const history = createBrowserHistory()
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={IndexPage} />
    </Router>
  </Provider>,
  rootElement
);

if ("serviceWorker" in navigator && PRODUCTION) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
