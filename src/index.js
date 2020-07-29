import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
let number = 5;
ReactDOM.render(
  <React.StrictMode>
    <App number={number} />
  </React.StrictMode>,
  rootElement
);
