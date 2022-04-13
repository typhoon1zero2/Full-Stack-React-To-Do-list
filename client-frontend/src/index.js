import React from "react";
import { StrictMode } from "react";
import ReactDom from "react-dom";
import "./App.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const element = document.getElementById("root");

ReactDom.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>, element
);
