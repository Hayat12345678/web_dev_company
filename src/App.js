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
<<<<<<< HEAD
      const response = await axios.get("REMOTE_CONNECTION");
=======
      const response = await axios.get("http//http://localhost:3300/users");
>>>>>>> b0ae8f9da9c02a3313b4336a148783d316ad3ec4
      setUsers(response.data);
      console.log(response.data);
    };
    loadData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>UI/UX Design Services</h1>
        <input id="input1" type="text"></input>
        <button onclick="myFunction()">Search</button>
        <div>
          <form>
            <input type="text" />
            <input type="text" />
            {edit ? (
              <button onClick={() => updateUser()}>Save</button>
            ) : (
              <button
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </button>
            )}
          </form>
        </div>
        <div>{JSON.stringify(users)}</div>
      </header>
    </div>
  );
}

export default App;
