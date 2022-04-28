import React from "react";
import "./users.css";
function AddUser() {
  return (
    <div className="addUser">
      {" "}
      <label>First name</label>
      <input id="input1" type="text"></input>
      <label>Last name</label>
      <input id="input1" type="text"></input>
      <label>Age</label>
      <input id="input1" type="text"></input>
      <button onclick="myFunction()">Add User</button>
    </div>
  );
}

export default AddUser;
