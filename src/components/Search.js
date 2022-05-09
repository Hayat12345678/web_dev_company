import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const Search = ({ onSearchTermChange = () => {} }) => {
  const [searchText, setSearchText] = useState(" ");
  console.log(onSearchTermChange);

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
            onSearchTermChange(searchText);
          }}
        >
          <FaSearch className="icon" />
        </button>
      </div>
    </header>
  );
};
