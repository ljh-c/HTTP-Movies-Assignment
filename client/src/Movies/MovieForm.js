import React, { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';

const MovieForm = props => {
  const movies = useContext(MoviesContext);

  // title, director, metascore, stars
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    setMovieInfo(movies.find(movie => `${movie.id}` === props.match.params.id));
  }, [movies]);

  return (
    <div className="save-wrapper">
      <h1>update movie</h1>
      {/* <div className="movie-card">
        <form>
          <input type="text"
            placeholder="Title"
            name="title"
            value={}
            onChange={}
            required
          />
          <div className="movie-director">
            <input type="text"
              placeholder="Director"
              name="director"
              value={}
              onChange={}
              required
            />
          </div>
          <div className="movie-metascore">
            <input type="number"
              placeholder="Metascore"
              name="metascore"
              value={}
              onChange={}
              required
            />
          </div>
          <h3>Actors</h3>
        </form>
      </div> */}
    </div>
  );
};

export default MovieForm;