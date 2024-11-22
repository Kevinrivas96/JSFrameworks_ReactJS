import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      const url = `http://www.omdbapi.com/?i=${id}&apikey=263d22d8`;

      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson) {
        setMovie(responseJson);
      }
    };

    getMovieDetails();
  }, [id]);

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="btn btn-secondary mb-3">
        Back
      </button>
      {movie ? (
        <div>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;