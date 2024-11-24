import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";

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
    const movieExists = favourites.find(
      (favourite) => favourite.id === movie.id
    );
  
    if (!movieExists) {
      const newFavouriteList = [movie, ...favourites];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const clearSearch = () => {
    setSearchValue("");
    setSearchResults([]);
  };

  return (
    <Router>
      <div className="movie-app">
        <Header 
          searchValue={searchValue} 
          onSearchChange={handleSearch}
          onClearSearch={clearSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
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

                {searchValue.trim() && searchResults.length > 0 && (
                  <>
                    <div className="row d-flex align-items-center mt-4">
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

                <div className="row d-flex align-items-center mt-4">
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
                    <div className="row d-flex align-items-center mt-4">
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
              </>
            }
          />
          <Route 
            path="/movie/:id" 
            element={
              <MovieDetails 
                apiKey={apiKey}
                addFavouriteMovie={addFavouriteMovie}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;