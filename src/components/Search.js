import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Users from "./Users";

export const Search = ({ onSearchTermChange = () => {} }) => {
  const [searchText, setSearchText] = useState(" ");
  console.log(onSearchTermChange);
  const [searchParams, setSearchParams] = useSearchParams();
  const [users, setUsers] = useState([]);

  return (
    <header className="Users-header">
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
