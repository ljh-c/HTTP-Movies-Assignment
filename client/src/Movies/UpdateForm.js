import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesContext } from '../contexts/MoviesContext';

const UpdateForm = props => {
  const movies = useContext(MoviesContext);
  const [movieInfo, setMovieInfo] = useState({
    title: '',
    director: '',
    metascore: '',
    stars: []
  });
  const { id } = useParams();

  // on mount, App has not yet fetched data
  useEffect(() => {
    const movieToEdit = movies.find(movie => `${movie.id}` === id);
    
    if (movieToEdit) setMovieInfo(movieToEdit);

  }, [movies, id]);

  const handleChange = (evt, index) => {
    evt.persist();
    if (evt.target.name === 'actor') {
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

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <form onSubmit={handleSubmit}>
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
                name="actor"
                value={movieInfo.stars[index]}
                onChange={evt => handleChange(evt, index)}
              />
            </div>
          ))}
          <button>Send Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;