import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<App />} />
      <Route path="/addUser" element={<AddUser />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
