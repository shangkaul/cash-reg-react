import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>,
  rootElement
);
