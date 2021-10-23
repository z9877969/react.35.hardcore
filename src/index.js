import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import AppProvider from "./components/AppProvider/AppProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// import {createContext} from 'react';

// const AppContext = createContext()
// console.log('AppContext :>> ', AppContext);
