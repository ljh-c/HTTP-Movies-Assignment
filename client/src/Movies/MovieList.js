import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { MoviesContext } from "../contexts/MoviesContext"
const MovieList = () => {
  const movies = useContext(MoviesContext);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}

export default MovieList;