import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { MoviesContext } from "../contexts/MoviesContext"
const MovieList = ({ history }) => {
  const movies = useContext(MoviesContext);

  const handleAdd = evt => {
    evt.preventDefault();
    history.push("/add-movie");
  };

  return (
    <>
    <button onClick={handleAdd}>Add New Movie</button>
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
    </>
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