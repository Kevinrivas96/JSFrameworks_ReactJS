import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  const imageURL = "https://image.tmdb.org/t/p/w300"

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3" key={index}>
          {/* <Link to={`/movie/${movie.imdbID}`}>
            
          </Link> */}
          <img src={imageURL + movie.poster_path} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;