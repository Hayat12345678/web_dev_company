import React from "react";
import { useState } from "react";
import axios from "axios";
import "./users.css";

function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const addUser = async () => {
    await axios.post("http://localhost:3300/addUser", {
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
    });
    console.log(firstName + lastName + age + email);
  };

  return (
    <div className="addUser">
      <div className="userBox">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
}

export default AddUser;
