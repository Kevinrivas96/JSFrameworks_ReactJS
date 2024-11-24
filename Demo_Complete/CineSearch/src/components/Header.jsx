import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = ({ searchValue, onSearchChange }) => {
  const navigate = useNavigate();

  const handleSearchChange = (value) => {
    onSearchChange(value);
    if (value.trim() && window.location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <div className="container-fluid bg-dark py-2 px-5">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <img
            className="logo"
            src="/src/assets/logo.png"
            alt="logo"
            width="100"
          />
        </Link>
        <div className="search-container">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;