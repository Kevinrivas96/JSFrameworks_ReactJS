import React from "react";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className="col search-box">
      <input
        className="form-control"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
