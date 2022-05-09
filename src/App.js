import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Edit from "./components/Edit";
import { Search } from "./components/Search";
import { Link } from "react-router-dom";

//import dotenv from "dotenv";
// dotenv.config();

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("http://localhost:3300/users");
      setUsers(response.data);
      console.log(response.data);
    };
    loadData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>UI/UX Design Services</h1>

        <label>Search for user </label>
        <Edit />
        <Search />

        <table>
          <thead>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email Address</th>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <button>Delete</button>
                  <button>Edit</button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
