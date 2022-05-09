import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Users from "./Users";
import axios from "axios";

export const Search = ({ onSearchTermChange = () => {} }) => {
  const [searchText, setSearchText] = useState(" ");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [customers, setCustomers] = useState([]);

  const handleSearchTermChange = (newSearchTerm) => {
    navigate(`/search?firstName=${newSearchTerm}`);
  };

  const firstName = searchParams.get("firstName");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("http://localhost:3300/users");
        setCustomers(response.data);
      } catch (err) {
        // console.log(err);
        alert(err);
      }
    };
    loadData();
  }, []);

  return (
    <header className="search-header">
      <div className="search">
        <h1>Search User</h1>
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              onSearchTermChange(searchText);
            }
          }}
        />
        <button
          onClick={() => {
            onSearchTermChange(handleSearchTermChange);
          }}
        >
          <FaSearch className="icon" />
        </button>
      </div>

      {Users.filter((user) => {
        if (
          firstName === searchText ||
          firstName === null ||
          firstName === undefined
        ) {
          if (user.firstName === searchText) {
            return user._id;
          } else {
            return "User not found!";
          }
        }
      })}
    </header>
  );
};
