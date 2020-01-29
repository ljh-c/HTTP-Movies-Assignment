import React, { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';

const MovieForm = props => {
  const movies = useContext(MoviesContext);

  // title, director, metascore, stars
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    setMovieInfo(movies.find(movie => `${movie.id}` === props.match.params.id));
  }, [movies, props.match.params.id]);

  const handleChange = (evt, index) => {
    if (evt.target.name === 'stars') {
      setMovieInfo({
        ...movieInfo,
        stars: movieInfo.stars.map((star, idx) => idx === index ? evt.target.value : star)
      });
    } else {
      setMovieInfo({
        ...movieInfo,
        [evt.target.name]: evt.target.value
      });
    }
  };

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        {movieInfo && (
          <form>
          <input type="text"
            placeholder="Title"
            name="title"
            value={movieInfo.title}
            onChange={handleChange}
            required
          />
          <div className="movie-director">
            <input type="text"
              placeholder="Director"
              name="director"
              value={movieInfo.director}
              onChange={handleChange}
              required
            />
          </div>
          <div className="movie-metascore">
            <input type="number"
              placeholder="Metascore"
              name="metascore"
              value={movieInfo.metascore}
              onChange={handleChange}
              required
            />
          </div>
          <h3>Actors</h3>
          {movieInfo.stars.map((star, index) => (
            <div key={index} className="movie-star">
              <input type="text"
                placeholder="Actor"
                name="stars"
                value={movieInfo.stars[index]}
                onChange={(evt) => handleChange(evt, index)}
              />
            </div>
          ))}
          <button>Send Edit</button>
        </form>
        )}
      </div>
    </div>
  );
};

export default MovieForm;