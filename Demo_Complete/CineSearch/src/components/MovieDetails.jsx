import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const apiKey = "e4be2d8d86fbfd83ce907eca1f0262ab";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie)
    return (
      <div
        className="position-fixed translate-middle spinner"
        style={{ zIndex: 1000 }}
      >
        <div className="spinner-border spinner-element" role="status"></div>
      </div>
    );

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/src/assets/no-image.png"
            }
            alt={movie.title}
            className="img-fluid"
            onError={(e) => {
              e.target.src = "/src/assets/no-image.png";
            }}
          />
        </div>
        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p className="lead">{movie.overview}</p>
          <div className="mt-3">
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average}/10
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres?.map((g) => g.name).join(", ")}
            </p>
            <button onClick={() => navigate(-1)} className="back-button">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
