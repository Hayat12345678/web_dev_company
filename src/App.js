import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

function App() {
  const [edit, setEdit] = useState(false);

  const updateUser = () => {
    //update action
    setEdit(false);
  };

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
        <input id="input1" type="text"></input>
        <button onclick="myFunction()">Search</button>
        <div>
          <form>
            <label>User Name: </label>
            <input type="text" />
            <label>User Name: </label>
            <input type="text" />
            {edit ? (
              <button onClick={() => updateUser()}>Save</button>
            ) : (
              <button
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit User
              </button>
            )}
          </form>
        </div>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
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
