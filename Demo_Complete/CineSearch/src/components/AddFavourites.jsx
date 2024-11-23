import React from "react";
import { FaHeart } from "react-icons/fa";

const AddFavourite = () => {
  return (
    <div className="d-flex align-items-center">
      <span className="me-2">Add to Favourites</span>
      <FaHeart className="fav-icon" />
    </div>
  );
};

export default AddFavourite;
