import React, { useState } from "react";
import "./Searchbar.css";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
    // Add search functionality here
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find your dream jobs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>
        <SearchIcon/>
      </button>
    </div>
  );
};

export default SearchBar;
