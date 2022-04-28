import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("http//http://localhost:3000/users");
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
        <button onclick="myFunction()">Click me</button>
        <div>{JSON.stringify(users)}</div>
      </header>
    </div>
  );
}

export default App;
