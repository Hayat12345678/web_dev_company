import React from "react";
import "./users.css";
function AddUser() {
  return (
    <div className="addUser">
      {" "}
      <div className="label">
        <label>Add user</label>
        <button onclick="myFunction()">Add User</button>
        <label>First name</label>
        <input id="input1" type="text"></input>
        <label>Last name</label>
        <input id="input1" type="text"></input>
        <label>Age</label>
        <input id="input1" type="text"></input>
      </div>
    </div>
  );
}

export default AddUser;