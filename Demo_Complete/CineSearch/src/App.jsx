import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "e4be2d8d86fbfd83ce907eca1f0262ab";

  const getMovieRequest = async (searchValue) => {
    try {
      setIsLoading(true);
      setError(null);
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Search failed");
      const responseJson = await response.json();
      if (responseJson.results) {
        setSearchResults(responseJson.results);
      }
    } catch (err) {
      setError("Failed to fetch search results");
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getTrendingMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch trending movies");
      const responseJson = await response.json();
      if (responseJson.results) {
        setTrendingMovies(responseJson.results);
      }
    } catch (err) {
      setError("Failed to fetch trending movies");
      setTrendingMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  useEffect(() => {
    if (searchValue) {
      const timeoutId = setTimeout(() => {
        getMovieRequest(searchValue);
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="movie-app">
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
                      setSearchValue={setSearchValue}
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              {isLoading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}

              {searchValue && searchResults.length > 0 && (
                <>
                  <div className="row d-flex align-items-center mt-4 mb-4">
                    <MovieListHeading heading="Search Results" />
                  </div>
                  <div className="row-custom d-flex">
                    <MovieList
                      movies={searchResults}
                      handleFavouritesClick={addFavouriteMovie}
                      favouriteComponent={AddFavourites}
                    />
                  </div>
                </>
              )}

              <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading="Trending Movies" />
              </div>
              <div className="row-custom d-flex">
                <MovieList
                  movies={trendingMovies}
                  handleFavouritesClick={addFavouriteMovie}
                  favouriteComponent={AddFavourites}
                />
              </div>

              {favourites.length > 0 && (
                <>
                  <div className="row d-flex align-items-center mt-4 mb-4">
                    <MovieListHeading heading="Favourites" />
                  </div>
                  <div className="row-custom d-flex">
                    <MovieList
                      movies={favourites}
                      handleFavouritesClick={removeFavouriteMovie}
                      favouriteComponent={RemoveFavourites}
                    />
                  </div>
                </>
              )}
            </div>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
