import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3' key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </Link>
          <div 
            onClick={() => props.handleFavouritesClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;