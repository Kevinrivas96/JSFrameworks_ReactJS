import React from "react";
import { FaTimes } from "react-icons/fa";

const RemoveFavourites = () => {
  return (
    <div className="d-flex align-items-center">
      <span className="me-2">Remove from Favorites</span>
      <FaTimes className="fav-icon" />
    </div>
  );
};

export default RemoveFavourites;