import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 1200;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="position-relative px-3">
      <button 
        className="scroll-button left" 
        onClick={() => scroll('left')}
      >
        <FaChevronLeft />
      </button>

      <div 
        className="movies-container" 
        ref={scrollContainerRef}
      >
        {props.movies.map((movie, index) => (
          <div className='image-container d-flex justify-content-start m-3' key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            </Link>
            <div 
              onClick={() => props.handleFavouritesClick(movie)}
              className='overlay d-flex align-items-center justify-content-center'
            >
              <FavouriteComponent />
            </div>
          </div>
        ))}
      </div>

      <button 
        className="scroll-button right" 
        onClick={() => scroll('right')}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default MovieList;