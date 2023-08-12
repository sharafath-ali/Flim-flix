import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import './Styles/index.scss'
import appContextWrapper from "./Context/appContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <appContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </appContextWrapper>
  </React.StrictMode>
);
