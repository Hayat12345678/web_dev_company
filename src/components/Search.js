import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const Search = ({ onSearchTermChange = () => {} }) => {
  const [searchText, setSearchText] = useState("");
  console.log(onSearchTermChange);

  return (
    <div className="search-bar">
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
  );
};
