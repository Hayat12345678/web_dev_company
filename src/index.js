import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Edit from "./components/Edit";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
      <Route path="/addUser" element={<AddUser />} />
      <Route path="/edit:userId" element={<Edit />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
