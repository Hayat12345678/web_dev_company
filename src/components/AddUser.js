import React from "react";
import "./users.css";
function AddUser() {
  return (
    <div className="addUser">
      <div className="userBox">
        <input id="input1" type="text" placeholder="First Name"></input>
        <input id="input1" type="text" placeholder="Last Name"></input>
        <input id="input1" type="text" placeholder="Age"></input>
        <input id="input1" type="text" placeholder="Email Address"></input>
        <button onclick="myFunction()">Add User</button>
      </div>
    </div>
  );
}

export default AddUser;
