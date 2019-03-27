import * as React from "react";
import * as ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const App = () => <h1>Seed 2</h1>;

ReactDOM.render(<App />, rootElement);

if ("serviceWorker" in navigator) {
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
