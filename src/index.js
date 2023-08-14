import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import './Styles/index.scss'
import AppGlobalState from "./Context/AppGlobalState";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppGlobalState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppGlobalState>
  </React.StrictMode>
);
