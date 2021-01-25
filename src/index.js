import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={true}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
